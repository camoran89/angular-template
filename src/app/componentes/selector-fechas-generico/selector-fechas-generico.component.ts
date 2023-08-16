import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { ISelectorFechasGenerico } from '../modelos/ISelectorFechasGenerico';
import { IUtiles } from '../modelos/IUtiles';

import { Utiles } from '../utiles/utiles';

@Component({
  selector: 'selector-fechas-generico',
  templateUrl: './selector-fechas-generico.component.html',
  styleUrls: ['./selector-fechas-generico.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorFechasGenericoComponent),
      multi: true
    }
  ]
})
export class SelectorFechasGenericoComponent implements ControlValueAccessor {

  @Input()
  configuracion: ISelectorFechasGenerico;

  estaDeshabilitado: boolean = false;

  id: string = "";
  valor: Date = null;

  private enCambio: (valor: string) => void;
  private enToque: () => void;

  constructor() {
    this.id = uuidv4();
  }

  writeValue(valor: Date): void {
    this.valor = valor;
  }

  registerOnChange(fn: any): void {
    this.enCambio = fn;
  }

  registerOnTouched(fn: any): void {
    this.enToque = fn;
  }

  setDisabledState?(estaDeshabilitado: boolean): void {
    this.estaDeshabilitado = estaDeshabilitado;
  }

  cambioEnFecha(evento: Event): void {
    this.configuracion.hayError = false;
  }

  cambioEnEntrada(evento: Event): void {
    var valor = (evento.target as HTMLInputElement).value;
    var respuesta: IUtiles = { error: true, valor: '' };

    if (valor !== "") {
      respuesta = Utiles.verficarFormatoFecha(valor);
    }

    this.configuracion.esRequerido ? this.configuracion.hayError = respuesta.error : this.configuracion.hayError = false;
    this.configuracion.hayError = respuesta.error;

    if (!respuesta.error) {
      this.valor = new Date(respuesta.valor);
      this.configuracion.hayError = false;
    } else {
      (evento.target as HTMLInputElement).value = respuesta.valor;
      this.configuracion.hayError = true;
    }
  }
}

import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { IEntradaGenerica } from '../modelos/IEntradaGenerica';

import { IObjeto } from '../modelos/IObjeto';

@Component({
  selector: 'autocompletado-generico',
  templateUrl: './autocompletado-generico.component.html',
  styleUrls: ['./autocompletado-generico.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompletadoGenericoComponent),
      multi: true
    }
  ]
})
export class AutocompletadoGenericoComponent implements OnInit, ControlValueAccessor {

  @Input()
  configuracion: IEntradaGenerica;

  estaDeshabilitado: boolean = false;

  id: string = "";
  valor: string = "";

  opciones: Array<IObjeto> = new Array<IObjeto>();

  private enCambio: (valor: string) => void;
  private enToque: () => void;

  constructor() {
    this.id = uuidv4();
  }

  ngOnInit(): void {
    this.opciones = this.configuracion.opciones;
  }

  writeValue(valor: string): void {
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

  cambioEnEntrada(evento: Event): void {
    var valor = (evento.target as HTMLInputElement).value;

    this.opciones = this.configuracion.opciones.filter((opcion: IObjeto) => {
      return opcion.valor.toLowerCase().includes(valor.toLowerCase());
    });

    if (this.opciones.length === 1) {
      valor = '(' + this.opciones[0].clave + ') - ' + this.opciones[0].valor;
      this.obtenerSeleccion(valor);
      (evento.target as HTMLInputElement).value = valor;
    }
  }

  obtenerSeleccion(valor: string): void {
    this.configuracion.hayError = valor.length === 0;
    if (!this.configuracion.hayError) {
      this.enCambio(valor);
    }
  }
}

import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { IEntradaGenerica } from '../modelos/IEntradaGenerica';
import { IUtiles } from '../modelos/IUtiles';

import { Utiles } from '../utiles/utiles';

@Component({
  selector: 'entrada-generica',
  templateUrl: './entrada-generica.component.html',
  styleUrls: ['./entrada-generica.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EntradaGenericaComponent),
      multi: true
    }
  ]
})
export class EntradaGenericaComponent implements ControlValueAccessor {

  @Input()
  configuracion: IEntradaGenerica;

  estaDeshabilitado: boolean = false;

  longitud: number = 0;

  id: string = "";
  valor: string = "";
  errorLongitud: string = "";

  private enCambio: (valor: string) => void;
  private enToque: () => void;

  constructor() {
    this.id = uuidv4();
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

    var respuesta: IUtiles = { error: true, valor: '' };

    this.errorLongitud = "";
    switch (this.configuracion.tipo) {
      case "texto":
        respuesta = Utiles.agregarFormatoTexto(valor, this.configuracion.maximo);
        this.errorLongitud = "Longitud minima del texto debe ser de " + this.configuracion.minimo + " caracteres";
        break;
      case "numerico":
        respuesta = Utiles.agregarFormatoNumerico(valor, this.configuracion.minimo, this.configuracion.maximo);
        this.errorLongitud = "Se admiten numeros desde " + this.configuracion.minimo + " hasta " + this.configuracion.maximo;
        break;
      case "correo":
        respuesta = Utiles.verificarFormatoCorreoElectronico(valor, this.configuracion.maximo);
        this.errorLongitud = "La longitud maxima del correo electronico debe ser de " + this.configuracion.maximo + " caracteres";
        break;
      case "telefono":
        respuesta = Utiles.verificarFormatoNumeroTelefonico(valor);
        break;
    }
    this.longitud = respuesta.valor.length;
    this.configuracion.esRequerido ? this.configuracion.hayError = respuesta.error : this.configuracion.hayError = false;
    this.configuracion.hayError = respuesta.error;

    (evento.target as HTMLInputElement).value = respuesta.valor;

    if (!this.configuracion.hayError) {
      if (this.longitud >= this.configuracion.minimo) {
        this.enCambio(respuesta.valor);
      } else { 
        this.enCambio('');
      }
    }
  }
}

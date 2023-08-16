import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { IEntradaGenerica } from '../modelos/IEntradaGenerica';

@Component({
  selector: 'contrasena-generico',
  templateUrl: './contrasena-generico.component.html',
  styleUrls: ['./contrasena-generico.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContrasenaGenericoComponent),
      multi: true
    }
  ]
})
export class ContrasenaGenericoComponent implements ControlValueAccessor {

  @Input()
  configuracion: IEntradaGenerica;

  estaOculto: boolean = true;
  estaDeshabilitado: boolean = false;

  id: string = "";
  valor: string = "";

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
    
  }
}

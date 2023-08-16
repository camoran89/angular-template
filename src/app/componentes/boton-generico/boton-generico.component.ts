import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

import { IBotonGenerico } from '../modelos/IBotonGenerico';

@Component({
  selector: 'boton-generico',
  templateUrl: './boton-generico.component.html',
  styleUrls: ['./boton-generico.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BotonGenericoComponent),
      multi: true
    }
  ]
})
export class BotonGenericoComponent implements ControlValueAccessor {

  @Input()
  configuracion: IBotonGenerico;
  
  estaDeshabilitado: boolean = false;

  id: string = "";

  private enCambio: (valor: string) => void;
  private enToque: () => void;

  constructor() {
    this.id = uuidv4();
  }

  writeValue(obj: any): void {

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
}

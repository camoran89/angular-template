import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IVentanaGenerica } from '../modelos/IVentanaGenerica';

@Component({
  selector: 'ventana-generica',
  templateUrl: './ventana-generica.component.html',
  styleUrls: ['./ventana-generica.component.scss'],
})
export class VentanaGenericaComponent {

  constructor(public referencia: MatDialogRef<VentanaGenericaComponent>,
    @Inject(MAT_DIALOG_DATA) public configuracion: IVentanaGenerica) { }

  aceptar() {
    this.referencia.close('aceptar');
  }

  cancelar() {
    this.referencia.close('cancelar');
  }
}

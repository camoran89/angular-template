import { Component, Input, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

import { IPaginadorGenerico } from '../modelos/IPaginadorGenerico';

import { PaginadorGenerico } from './paginador-generico';

@Component({
  selector: 'paginador-generico',
  templateUrl: './paginador-generico.component.html',
  styleUrls: ['./paginador-generico.component.scss'],
  providers: [
    {
      provide: MatPaginatorIntl,
      useFactory: (componente: PaginadorGenericoComponent) => new PaginadorGenerico(),
      deps: [PaginadorGenericoComponent],
    }
  ]
})
export class PaginadorGenericoComponent implements OnInit {

  @Input()
  configuracion: IPaginadorGenerico;

  private longitudMinima: number = 20;

  opcionesPaginado: Array<Number> = new Array<Number>();

  constructor() { }

  ngOnInit(): void {
    if (this.configuracion.numeroRegistros >= this.longitudMinima) {
      for (var i = 0; i < 4; i++) {
        var factor = 0.125 * (i + 1);
        this.opcionesPaginado[i] = Math.round(factor * this.configuracion.numeroRegistros);
      }
    } else {
      this.opcionesPaginado = [Math.round(0.5 * this.configuracion.numeroRegistros), this.configuracion.numeroRegistros];
    }
  }
}

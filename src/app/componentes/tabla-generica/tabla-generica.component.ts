import { Component, OnDestroy, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-generica',
  templateUrl: './tabla-generica.component.html',
  styleUrls: ['./tabla-generica.component.scss']
})
export class TablaGenericaComponent implements OnInit, OnDestroy {

  datos = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  aplicarFiltro(evento: Event) {

  }
}

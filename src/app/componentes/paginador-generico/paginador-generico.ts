import { MatPaginatorIntl } from '@angular/material/paginator';

import { Subject } from 'rxjs';

import { IPaginadorGenerico } from '../modelos/IPaginadorGenerico';

export class PaginadorGenerico extends MatPaginatorIntl {

  override changes = new Subject<void>();

  override itemsPerPageLabel = '';

  override firstPageLabel = '';
  override lastPageLabel = '';

  override nextPageLabel = '';
  override previousPageLabel = '';

  constructor() { 
    super();

    this.itemsPerPageLabel = "Elementos por página";
    this.firstPageLabel = "Primera página";
    this.lastPageLabel = "Última  página";
    this.nextPageLabel = "Siguiente"
    this.previousPageLabel = "Anterior";

    this.getRangeLabel = (pagina, tamanoPagina, longitud) => {
      if (longitud == 0 || tamanoPagina == 0) {
        return `Página ${longitud} de ${longitud}`;
      }
  
      longitud = Math.max(longitud, 0);
  
      const inicio = pagina * tamanoPagina;
      const fin = inicio < longitud ? Math.min(inicio + tamanoPagina, longitud) : inicio + tamanoPagina;
  
      return `Página ${inicio + 1} de ${fin}`;
    };
  }
}
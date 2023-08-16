import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';

import { EntradaGenericaComponent } from './entrada-generica/entrada-generica.component';
import { AutocompletadoGenericoComponent } from './autocompletado-generico/autocompletado-generico.component';
import { BotonGenericoComponent } from './boton-generico/boton-generico.component';
import { VentanaGenericaComponent } from './ventana-generica/ventana-generica.component';
import { SelectorFechasGenericoComponent } from './selector-fechas-generico/selector-fechas-generico.component';
import { ContrasenaGenericoComponent } from './contrasena-generico/contrasena-generico.component';
import { TablaGenericaComponent } from './tabla-generica/tabla-generica.component';
import { PaginadorGenericoComponent } from './paginador-generico/paginador-generico.component';

@NgModule({
  declarations: [
    EntradaGenericaComponent,
    AutocompletadoGenericoComponent,
    BotonGenericoComponent,
    VentanaGenericaComponent,
    SelectorFechasGenericoComponent,
    ContrasenaGenericoComponent,
    TablaGenericaComponent,
    PaginadorGenericoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatPaginatorModule
  ],
  exports: [
    EntradaGenericaComponent,
    AutocompletadoGenericoComponent,
    BotonGenericoComponent,
    VentanaGenericaComponent,
    SelectorFechasGenericoComponent,
    ContrasenaGenericoComponent,
    TablaGenericaComponent,
    PaginadorGenericoComponent,
  ]
})
export class ComponentesModule { }

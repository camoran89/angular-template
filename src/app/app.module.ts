import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AplicacionComponent } from './aplicacion/aplicacion.component';

import { ComponentesModule } from "./componentes/componentes.module";

@NgModule({
    declarations: [
        AppComponent,
        AplicacionComponent
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ComponentesModule
    ]
})
export class AppModule { }

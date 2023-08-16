import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { IEntradaGenerica } from '../componentes/modelos/IEntradaGenerica';
import { ISelectorFechasGenerico } from '../componentes/modelos/ISelectorFechasGenerico';
import { IBotonGenerico } from '../componentes/modelos/IBotonGenerico';
import { IVentanaGenerica } from '../componentes/modelos/IVentanaGenerica';

import { VentanaGenericaComponent } from '../componentes/ventana-generica/ventana-generica.component';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.scss']
})
export class AplicacionComponent implements OnInit, OnDestroy {

  formulario: FormGroup;

  primerNombreConfig: IEntradaGenerica;
  tipoDocumentoIdentidadConfig: IEntradaGenerica;
  numeroDocumentoIdentidadConfig: IEntradaGenerica;
  correoElectronicoConfig: IEntradaGenerica;
  telefonoConfig: IEntradaGenerica;
  fechaNacimientoConfig: ISelectorFechasGenerico;
  contrasenaConfig: IEntradaGenerica;
  botonEnviarConfig: IBotonGenerico;
  botonBorrarConfig: IBotonGenerico;
  ventanaEnviarConfig: IVentanaGenerica;
  ventanaBorrarConfig: IVentanaGenerica;

  constructor(private readonly fb: FormBuilder,
    private readonly ventana: MatDialog) {
    this.formulario = fb.group({
      primerNombre: ['', Validators.required],
      tipoDocumentoIdentidad: ['', Validators.required],
      numeroDocumentoIdentidad: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.primerNombreConfig = {
      esRequerido: true,
      hayError: true,
      etiqueta: "Primer nombre",
      textoProvisional: "Ej. Jorge",
      minimo: 2,
      maximo: 20,
      tipo: "texto",
      mensajeError: "El valor del primer nombre es requerido"
    };

    this.tipoDocumentoIdentidadConfig = {
      esRequerido: true,
      hayError: true,
      textoProvisional: "Seleccione una de las opciones",
      etiqueta: "Tipo de documento de identidad",
      mensajeError: "El valor del tipo de documento de identidad es requerido",
      opciones: [{ clave: 'CC', valor: 'Cedula de ciudadania' }, { clave: 'TI', valor: 'Tarjeta de identidad' }, { clave: 'RC', valor: 'Registro civil de nacimiento' }, { clave: 'CE', valor: 'Cedula de extrangeria' }, { clave: 'PA', valor: 'Pasaporte' }]
    };

    this.numeroDocumentoIdentidadConfig = {
      esRequerido: true,
      hayError: true,
      textoProvisional: "Ej. 5334887",
      etiqueta: "Numero de documento de identidad",
      minimo: 1,
      maximo: 9999999999,
      tipo: "numerico",
      mensajeError: "El valor del numero de documento de identidad es requerido"
    };

    this.correoElectronicoConfig = {
      esRequerido: true,
      hayError: true,
      textoProvisional: 'Ej. usuario@dominio.com',
      etiqueta: "Correo electronico",
      minimo: 0,
      maximo: 100,
      tipo: "correo",
      mensajeError: "El valor del correo electronico es requerido y debe cumplir con el formato de correo electronico definido"
    };

    this.telefonoConfig = {
      esRequerido: true,
      hayError: true,
      minimo: 0,
      textoProvisional: 'Ej. 6027333345',
      etiqueta: "Numero de telefono principal",
      tipo: "telefono",
      mensajeError: "El valor del numero de telefono es requerido y debe cumplir con el formato de numero telefonico definido"
    };

    this.botonEnviarConfig = {
      deshabilitado: true,
      color: 'primario',
      icono: 'send',
      nombre: 'Enviar'
    };

    this.botonBorrarConfig = {
      deshabilitado: false,
      color: 'basico',
      icono: 'clear',
      nombre: 'Borrar'
    };

    this.ventanaEnviarConfig = {
      titulo: 'Formulario',
      contenido: '¿Desea guardar los datos del formulario?',
      botonSi: 'Si',
      botonNo: 'No'
    };

    this.ventanaBorrarConfig = {
      titulo: 'Formulario',
      contenido: '¿Desea borrar los datos del formulario?',
      botonSi: 'Si',
      botonNo: 'No'
    };

    this.fechaNacimientoConfig = {
      esRequerido: true,
      hayError: true,
      etiqueta: 'Fecha de nacimiento',
      formato: 'MM/DD/AAAA',
      mensajeError: "El valor de la fecha de nacimiento es requerido",
      textoProvisional: "Seleccione una fecha"
    };

    this.contrasenaConfig = {
      esRequerido: true,
      hayError: true,
      etiqueta: "Contraseña",
      mensajeError: "El valor de la contraseña es requerido"
    };

    this.formulario.statusChanges.subscribe((estado: string) => {
      this.botonEnviarConfig.deshabilitado = estado === 'INVALID';
    });
  }

  ngOnDestroy(): void {

  }

  enviarDatos(): void {
    this.abrirVentanaEnviarDatos();
  }

  borrarDatos(): void {
    this.abrirVentanaBorrarDatos();
  }

  private abrirVentanaEnviarDatos() {
    const dialogRef = this.ventana.open(VentanaGenericaComponent, {
      data: this.ventanaEnviarConfig
    });

    dialogRef.afterClosed().subscribe(resultado => {
      let enviar = resultado === 'aceptar';
      if (this.formulario.valid && enviar) {
        debugger;
      }
    });
  }

  private abrirVentanaBorrarDatos() {
    const dialogRef = this.ventana.open(VentanaGenericaComponent, {
      data: this.ventanaBorrarConfig
    });

    dialogRef.afterClosed().subscribe((resultador: string) => {
      let borrar = resultador === 'aceptar';
      if (borrar) {
        this.formulario.reset();

        this.formulario.get('contrasena').reset();
  
        this.primerNombreConfig.hayError = true;
        this.tipoDocumentoIdentidadConfig.hayError = true;
        this.numeroDocumentoIdentidadConfig.hayError = true;
        this.correoElectronicoConfig.hayError = true;
        this.contrasenaConfig.hayError = true;
        this.telefonoConfig.hayError = true;
        this.fechaNacimientoConfig.hayError = true;
      }
    });
  }
}

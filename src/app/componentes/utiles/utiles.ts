import { IUtiles } from "../modelos/IUtiles";

import * as moment from 'moment';

export class Utiles {

  public static agregarFormatoTexto(texto: string, maximo: number): IUtiles {
    if (texto !== "") {
      if (texto.length >= maximo) {
        texto = texto.slice(0, texto.length - 1);
      }
      return { valor: texto, error: false };
    } else {
      return { valor: texto, error: true };
    }
  }

  public static agregarFormatoNumerico(numero: string, minimo: number, maximo: number): IUtiles {
    if (numero !== "" && numero !== "-" && numero !== "+") {
      numero = numero.toString().replaceAll(',', '');
      if (Number.isNaN(Number(numero))) {
        numero = numero.slice(0, numero.length - 1);
      }

      if (Number(numero) >= maximo) {
        numero = maximo.toString();
      }

      if (Number(numero) <= minimo) {
        numero = minimo.toString();
      }

      return { valor: new Intl.NumberFormat('es-MX').format(Number(numero)), error: false };
    } else {
      return { valor: numero, error: true };
    }
  }

  public static verificarFormatoCorreoElectronico(correo: string, maximo: number): IUtiles {
    let regex = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
    if (correo !== "") {
      if (correo.length >= maximo) {
        correo = correo.slice(0, correo.length - 1);
      }

      if (regex.test(correo)) {
        return { valor: correo, error: false };
      } else {
        return { valor: correo, error: true };
      }
    } else {
      return { valor: correo, error: true };
    }
  }

  public static verificarFormatoNumeroTelefonico(telefono: string): IUtiles {
    if (telefono.length > 12) {
      telefono = '';
    }

    telefono = telefono.replaceAll('-', '');
    if (!isNaN(+telefono) && telefono !== ' ') {
      let regex = new RegExp("^[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$");
      if (telefono !== "") {
        telefono = this.agregarLineasAlTelefono(telefono);
        if (telefono.length > 12) {
          telefono = telefono.slice(0, telefono.length - 1);
        }

        if (regex.test(telefono)) {
          return { valor: telefono, error: false };
        } else {
          return { valor: telefono, error: true };
        }
      } else {
        return { valor: telefono, error: true };
      }
    } else {
      telefono = telefono.slice(0, telefono.length - 1);
      return { valor: telefono, error: true };
    }
  }

  public static verficarFormatoFecha(fecha: string): IUtiles {
    if (fecha.length > 10) {
      fecha = fecha.slice(0, fecha.length - 1);
    }

    if (isNaN(+fecha[fecha.length - 1]) && !fecha[fecha.length - 1].includes("/")) {
      fecha = fecha.slice(0, fecha.length - 1);
      return { valor: fecha, error: true };
    }

    if (fecha !== ' ') {
      let regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
      if (fecha !== "") {
        if (regex.test(fecha)) {
          return { valor: fecha, error: false };
        } else {
          return { valor: fecha, error: true };
        }
      } else {
        return { valor: fecha, error: true };
      }
    } else {
      return { valor: fecha, error: true };
    }
  }

  private static agregarLineasAlTelefono(telefono: string): string {
    if (!telefono.endsWith("-")) {
      if ((telefono.length === 4 && telefono[3] !== '-') ||
        (telefono.length === 8 && telefono[7] !== '-')) {
        var ultimoDigito = telefono[telefono.length - 1];
        telefono = telefono.slice(0, telefono.length - 1);
        telefono = telefono + "-" + ultimoDigito;
      }

      if (telefono.length === 3 || telefono.length === 7) {
        telefono = telefono + "-";
      }
    } else {
      if (telefono.length === 4 || telefono.length === 8) {
        telefono = telefono.slice(0, telefono.length - 1);
      }
    }

    if (!telefono.includes("-")) {
      var arreglo: Array<string> = new Array<string>();
      var j = 0;
      for (var i = 0; i < telefono.length; i++) {
        if (i == 3 || i == 6) {
          arreglo[j] = "-";
          j = j + 1;
          arreglo[j] = telefono[i];
        } else {
          arreglo[j] = telefono[i];
        }
        j = j + 1;
      }
      telefono = "";
      arreglo.forEach(valor => {
        telefono = telefono + valor;
      });
    }

    return telefono;
  }
}
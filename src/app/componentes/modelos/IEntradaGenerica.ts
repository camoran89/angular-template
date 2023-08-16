import { IObjeto } from "./IObjeto";

export interface IEntradaGenerica {
  esRequerido?: boolean;
  hayError?: boolean;
  minimo?: number;
  maximo?: number;
  etiqueta: string;
  tipo?: string;
  textoProvisional?: string;
  mensajeError?: string;
  opciones?: Array<IObjeto>;
}
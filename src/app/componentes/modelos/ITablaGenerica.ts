export interface ITablaGenerica<T> {
  registrosPorPagina: Number;
  etiquetaFiltro?: string;
  textoProvisionalFiltro?: string;
  cabeceraTabla: Array<string>;
  filasTabla: Array<T>;
  pieTabla?: Array<T>;
}
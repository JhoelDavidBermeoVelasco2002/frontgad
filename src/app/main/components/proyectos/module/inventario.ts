export interface InventarioModel {
  id_proyecto: number;
  responsable: string;
  categoria: string;
  producto: string;
  marca: string;
  serial: string;
  detalle: string;
  imagen: string;
 
}


export interface UpdateProyectoDto extends Partial<InventarioModel> {

}

export class CreateProyectoDto {
  id_proyecto?: number;
  responsable: string;
  categoria: string;
  producto: string;
  marca: string;
  serial: string;
  detalle: string;
  imagen: string;


  constructor(data: CreateProyectoDto) {
    this.id_proyecto = data.id_proyecto;
    this.responsable = data.responsable;
    this.categoria = data.categoria;
    this.producto = data.producto;
    this.marca = data.marca;
    this.serial = data.serial;
    this.detalle = data.detalle;
    this.imagen = data.imagen

 
  }
}

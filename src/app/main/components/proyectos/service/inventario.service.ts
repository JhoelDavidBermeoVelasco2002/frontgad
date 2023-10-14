import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventarioModel, UpdateProyectoDto } from '../module/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  readonly API_URL:string="http://localhost:3000/api/proyecto/all";
  readonly apiUrl:string="http://localhost:3000/api/proyecto";
  // readonly apiEstado:string ="http://localhost:3000/api/estados/listarestado";
  // readonly apiRoles:string="http://localhost:3000/api/roles/listarroles"


  constructor(private http:HttpClient) { }

  getInventario(): Observable<InventarioModel[]> {
    return this.http.get<InventarioModel[]>(this.API_URL);
  }

//   getEstado(): Observable<EstadoModel[]> {
//     return this.http.get<EstadoModel[]>(this.apiEstado);
//   }
//   getRoles(): Observable<RolesModel[]> {
//     return this.http.get<RolesModel[]>(this.apiRoles);
//   }

  // getUsuarioid(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/usuarios/${id}`);
  // }


  crearInventario(inventario: InventarioModel): Observable<any>{
    return this.http.post(`${this.apiUrl}/create`, inventario);
  }



  /* eliminarMensaje(id: number): Observable<MensajeModel[]> {
    return this.http.delete<MensajeModel>('http://localhost:3000/mensajes' + id ).pipe(
      map(data => data.listado)
    );
  } */

  eliminarInventario(id_proyecto: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/eliminarproyecto/${id_proyecto}`);
  }

 /*  updateUsuario(usuario: UsuarioDTO,id: UsuarioModel['id'] ): Observable<any>{
    const url = `${this.apiUrl}/actualizarusuario/${id}`;
    return this.http.put<UsuarioModel>(url, usuario);
  }
 */
  updateInventario(id: number, report: UpdateProyectoDto): Observable<any>{
    return this.http.put(`${this.apiUrl}/update/${id}`, report )
  }

}

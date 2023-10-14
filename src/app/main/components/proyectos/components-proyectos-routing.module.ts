import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';

const routes : Routes = [
  //{path: '', component: Coloquen sus componentes}
  {path: 'inventario', component: InventarioComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsProyectosRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario/inventario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsProyectosRoutingModule } from './components-proyectos-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    ComponentsProyectosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ComponentsProyectosModule { }

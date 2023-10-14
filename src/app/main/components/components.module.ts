import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsAdministracionModule } from './administracion/components-administracion.module';
import { ComponentsPresidenciaModule } from './presidencia/components-presidencia.module';
import { ComponentsProyectosModule } from './proyectos/components-proyectos.module';
import { ComponentsSecretariaModule } from './secretaria/components-secretaria.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from 'src/app/menu/layout.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { ComponentsBienesModule } from './bienes/components-bienes.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsAdministracionModule,
    ComponentsBienesModule,
    ComponentsPresidenciaModule,
    ComponentsProyectosModule,
    ComponentsSecretariaModule,
    LayoutModule,
    RouterModule


  ]
})
export class ComponentsModule { }

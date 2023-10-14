import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
  {path: 'home',
    component: DashboardComponent,
    children: [
      {
        path: 'administracion',
        loadChildren: () => import('./administracion/components-administracion.module').then(m => m.ComponentsAdministracionModule),
      },
      {
        path: 'bienes',
        loadChildren: () => import('./bienes/components-bienes.module').then(m => m.ComponentsBienesModule),
      },
      {
        path: 'presidencia',
        loadChildren: () => import('./presidencia/components-presidencia.module').then(m => m.ComponentsPresidenciaModule),
      },
      {
        path: 'proyectos',
        loadChildren: () => import('./proyectos/components-proyectos.module').then(m => m.ComponentsProyectosModule),
      },
      {
        path: 'secretaria',
        loadChildren: () => import('./secretaria/components-secretaria.module').then(m => m.ComponentsSecretariaModule),
      },
    ]
  },
  { path: '', redirectTo: '/home/presidencia', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsRoutingModule { }

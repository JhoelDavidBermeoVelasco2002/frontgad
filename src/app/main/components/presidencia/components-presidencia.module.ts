import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { ComponentsPresidenciaRoutingModule } from './components-presidencia-routing.module';

@NgModule({
  declarations: [          
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ComponentsPresidenciaRoutingModule    
  ]
})
export class ComponentsPresidenciaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    ComponentsComponent
  ],
  declarations: [
    ComponentsComponent
  ],
  providers: [
  ]
})
export class ComponentsModule { }

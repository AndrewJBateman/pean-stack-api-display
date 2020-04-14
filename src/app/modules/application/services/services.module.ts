import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  exports: [
    ServicesComponent
  ],
  declarations: [
    ServicesComponent
  ],
  providers: [
  ]
})
export class ServicesModule { }

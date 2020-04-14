import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsComponent } from './chartjs.component';
import { ChartjsRoutingModule } from './chartjs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChartjsRoutingModule
  ],
  exports: [
    ChartjsComponent
  ],
  declarations: [
    ChartjsComponent
  ],
  providers: [
  ]
})
export class ChartjsModule { }

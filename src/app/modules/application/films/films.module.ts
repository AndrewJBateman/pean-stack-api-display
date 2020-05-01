import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsComponent } from './films.component';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  exports: [
    FilmsComponent
  ],
  declarations: [
    FilmsComponent
  ],
  providers: [
  ]
})
export class FilmsModule { }

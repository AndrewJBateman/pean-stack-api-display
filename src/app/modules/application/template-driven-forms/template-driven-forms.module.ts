import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';
import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenFormsRoutingModule
  ],
  exports: [
    TemplateDrivenFormsComponent
  ],
  declarations: [
    TemplateDrivenFormsComponent
  ],
  providers: [
  ]
})
export class TemplateDrivenFormsModule { }

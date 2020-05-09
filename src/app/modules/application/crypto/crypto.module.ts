import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoComponent } from "./crypto.component";
import { CryptoRoutingModule } from "./crypto-routing.module";

@NgModule({
  imports: [CommonModule, CryptoRoutingModule],
  exports: [CryptoComponent],
  declarations: [CryptoComponent]
})
export class CryptoModule { }

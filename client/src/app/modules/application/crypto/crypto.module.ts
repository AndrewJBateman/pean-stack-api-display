import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CryptoComponent } from "./crypto.component";
import { CryptoRoutingModule } from "./crypto-routing.module";
import { CryptoService } from "../../../services/crypto.service";

@NgModule({
  imports: [CommonModule, CryptoRoutingModule],
  exports: [CryptoComponent],
  declarations: [CryptoComponent],
  providers: [CryptoService],
})
export class CryptoModule {}

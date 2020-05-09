import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CryptoComponent } from "./crypto.component";

const routes: Routes = [{ path: "", component: CryptoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}

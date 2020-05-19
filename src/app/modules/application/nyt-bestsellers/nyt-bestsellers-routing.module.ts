import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NytBestsellersComponent } from "./nyt-bestsellers.component";

const routes: Routes = [{ path: "", component: NytBestsellersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NytBestsellersRoutingModule {}

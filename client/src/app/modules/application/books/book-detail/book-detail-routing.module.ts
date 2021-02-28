import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BookDetailComponent } from "./book-detail.component";

const routes: Routes = [{ path: "", component: BookDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookDetailRoutingModule {}

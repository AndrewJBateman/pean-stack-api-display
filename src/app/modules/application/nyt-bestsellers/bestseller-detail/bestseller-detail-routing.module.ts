import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { BestsellerDetailComponent } from './bestseller-detail.component';

const routes: Routes = [{ path: "", component: BestsellerDetailComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BestsellerDetailRoutingModule { }

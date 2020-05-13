import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { GoogleChartComponent } from "./google-chart.component";

const routes: Routes = [{ path: "", component: GoogleChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleChartRoutingModule { }

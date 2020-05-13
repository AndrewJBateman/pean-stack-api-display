import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServiceModule } from "./service/service.module";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { TableChartComponent } from './table-chart/table-chart.component';

import { GoogleChartComponent } from "./google-chart.component";
import { GoogleChartRoutingModule } from "./google-chart-routing.module";

@NgModule({
  imports: [CommonModule, ServiceModule, GoogleChartRoutingModule],
  exports: [LineChartComponent, PieChartComponent, TableChartComponent],
  declarations: [GoogleChartComponent, LineChartComponent, PieChartComponent, TableChartComponent],
})
export class GoogleChartModule {}

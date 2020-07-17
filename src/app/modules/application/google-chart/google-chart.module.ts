import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GoogleChartServiceModule } from "../../../services/google-chart.service.module";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { TableChartComponent } from "./table-chart/table-chart.component";
import { GaugeChartComponent } from "./gauge-chart/gauge-chart.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";

import { GoogleChartComponent } from "./google-chart.component";
import { GoogleChartRoutingModule } from "./google-chart-routing.module";

@NgModule({
  imports: [CommonModule, GoogleChartServiceModule, GoogleChartRoutingModule],
  exports: [
    LineChartComponent,
    PieChartComponent,
    TableChartComponent,
    GaugeChartComponent,
    BarChartComponent,
  ],
  declarations: [
    GoogleChartComponent,
    LineChartComponent,
    PieChartComponent,
    TableChartComponent,
    GaugeChartComponent,
    BarChartComponent,
  ],
})
export class GoogleChartModule {}

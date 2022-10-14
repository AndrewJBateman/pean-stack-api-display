import { Component } from "@angular/core"

import { GaugeData } from "../data-models/gaugeData";
import { CrudService } from "../data-services/crud.service";
import { GoogleChartService } from "../data-services/google-chart.service";
import gaugeData from "../../../../../assets/jsonData/gaugeData.json";

@Component({
  selector: "app-gauge-chart",
  templateUrl: "./gauge-chart.component.html",
  styleUrls: ["./gauge-chart.component.css"],
})
export class GaugeChartComponent {
  private gLib: any;
  gaugeData: GaugeData[] = gaugeData;

  constructor(private gChartService: GoogleChartService, private crudService: CrudService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", { packages: ["gauge"] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): void {
    const dbDataArr = [];
    this.crudService.getGaugeData().subscribe((items: GaugeData[]) => {
      dbDataArr.push(...items);
      const chartDataArray = [];
      dbDataArr.forEach(
        item => chartDataArray.push([item.label, item.reading])
      );
      const data = this.gLib.visualization.arrayToDataTable([
        ["Label", "Value"], ...chartDataArray
      ]);

      const options = {
        width: 400,
        height: 110,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5,
      };

      const chart = new this.gLib.visualization.Gauge(
        document.getElementById("divGaugeChart")
      );

      chart.draw(data, options);

      setInterval(() => {
        data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
      }, 13000);
      setInterval(() => {
        data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
        chart.draw(data, options);
      }, 5000);
      setInterval(() => {
        data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        chart.draw(data, options);
      }, 26000);

    });
  }
}

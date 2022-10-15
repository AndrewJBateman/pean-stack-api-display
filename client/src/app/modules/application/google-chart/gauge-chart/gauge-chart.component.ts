import { Component, Input } from "@angular/core";

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
  @Input() isProd: boolean = true;
  private gLib: any;
  gaugeData: GaugeData[] = gaugeData;

  constructor(
    private gChartService: GoogleChartService,
    private crudService: CrudService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", { packages: ["gauge"] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): void {
    const dbDataArr = [];
    const tempDataArray = [];
    const options = {
      width: 400,
      height: 110,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5,
    };

    this.isProd
      ? this.crudService.getGaugeData().subscribe((items: GaugeData[]) => {
          dbDataArr.push(...items);
          dbDataArr.forEach((item) =>
            tempDataArray.push([item.label, item.reading])
          );
        })
      : gaugeData.forEach((item) =>
          tempDataArray.push([item.label, item.reading])
        );

    // create chart data using the above database or assets data
    const data = this.gLib.visualization.arrayToDataTable([
      ["Label", "Value"],
      ...tempDataArray,
    ]);
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
  }
}

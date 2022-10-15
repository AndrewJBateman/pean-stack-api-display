import { Component, Input } from "@angular/core";

import { GoogleChartService } from "../data-services/google-chart.service";
import { CrudService } from "../data-services/crud.service";
import { Metal } from "../data-models/metal";
import metalsData from "../../../../../assets/jsonData/metalsData.json";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent {
  @Input() isProd: boolean = true;
  private gLib: any;
  metals: Metal[] = metalsData;

  constructor(
    private gChartService: GoogleChartService,
    private crudService: CrudService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", { packages: ["corechart"] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  // load metals data from backend database then add it to the array for display by google charts
  // data converted to array dbDataArr then used to create tempDataArray that is spread into the chartDataArray
  private drawChart(): void {
    const dbDataArr = [];
    const tempDataArray = [];
    const options = {
      width: 500,
      height: 300,
      bar: { groupWidth: "95%" },
      legend: { position: "none" },
    };

    this.isProd
      ? this.crudService.getAllMetals().subscribe((items: Metal[]) => {
          dbDataArr.push(...items);
          dbDataArr.forEach((item) =>
            tempDataArray.push([
              item.element,
              item.density,
              item.color,
              item.symbol,
            ])
          );
        })
      : metalsData.forEach((item) =>
          tempDataArray.push([
            item.element,
            item.density,
            item.color,
            item.symbol,
          ])
        );

    // create chart data using the above database or assets data
    const chartDataArr = [
      ["Element", "Density", { role: "style" }, { role: "annotation" }],
      ...tempDataArray,
    ];
    const data = this.gLib.visualization.arrayToDataTable(chartDataArr);
    const view = new this.gLib.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);

    const chart = new this.gLib.visualization.BarChart(
      document.getElementById("divBarChart")
    );
    chart.draw(data, options);
  }
}

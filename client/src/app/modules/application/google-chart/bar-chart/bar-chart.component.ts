import { Component } from "@angular/core";

import { GoogleChartService } from "../../../../services/google-chart.service";
import { CrudService } from "../../../../services/crud.service";
import { Metal } from "../../../../models/metal";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent {
  private gLib: any;

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
    let dbDataArr = [];
    this.crudService.getAllMetals().subscribe((items: Metal[]) => {
      dbDataArr.push(...items);
      const tempDataArray = [];
      dbDataArr.forEach((item) =>
        tempDataArray.push([
          item.element,
          item.density,
          item.color,
          item.symbol,
        ])
      );
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

      const options = {
        // title: "Density of Precious Metals, in g/cm^3",
        width: 500,
        height: 300,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };

      const chart = new this.gLib.visualization.BarChart(
        document.getElementById("divBarChart")
      );
      chart.draw(data, options);
    });
  }
}

import { Component, OnInit } from "@angular/core";

import { GoogleChartService } from "../../../../services/google-chart.service";
import { CrudService } from "../../../../services/crud.service";
import { Metal } from "../../../../models/metal";
import { Observable } from "rxjs";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})

export class BarChartComponent implements OnInit {

  private gLib: any;
  private crudData: Observable<Metal[]>;

  constructor(private gChartService: GoogleChartService, private crudService: CrudService) {
    this.gLib = this.gChartService.getGoogle();

    // Load the Visualization API and the controls package.
    this.gLib.charts.load("current", { packages: ["corechart"] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit(): any {

  }
  private drawChart(): any {
    let dbDataArr = [];
    this.crudService.getAllMetals().subscribe((items: Metal[]) => {
      console.log("items: ", items);
      dbDataArr.push(...items);
      const tempDataArray = [];
      dbDataArr.forEach(
        item => tempDataArray.push([item.element, item.density, item.color, item.symbol])
      );
      const chartDataArr = [["Element", "Density", { role: "style" }, { role: "annotation" }], ...tempDataArray];
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
        title: "Density of Precious Metals, in g/cm^3",
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

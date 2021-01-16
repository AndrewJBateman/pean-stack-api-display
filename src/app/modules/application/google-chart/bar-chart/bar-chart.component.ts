import { Component } from "@angular/core";

import { GoogleChartService } from "../../../../services/google-chart.service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();

    // Load the Visualization API and the controls package.
    this.gLib.charts.load("current", { packages: ["corechart"] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): any {
    const data = this.gLib.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }, { role: "annotation" }],
      ["Copper", 8.94, "#b87333", "Cu"], // RGB value
      ["Silver", 10.49, "silver", "Ag"], // English color name
      ["Gold", 19.3, "gold", "Au"],
      ["Platinum", 21.45, "color: #e5e4e2", "Pt"], // CSS-style declaration
    ]);

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
  }
}

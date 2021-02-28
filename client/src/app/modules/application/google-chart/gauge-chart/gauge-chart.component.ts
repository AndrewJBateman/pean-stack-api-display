import { Component } from "@angular/core";

import { GoogleChartService } from "../../../../services/google-chart.service";

@Component({
  selector: "app-gauge-chart",
  templateUrl: "./gauge-chart.component.html",
  styleUrls: ["./gauge-chart.component.css"],
})
export class GaugeChartComponent {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();

    // Load the Visualization API and the controls package.
    this.gLib.charts.load("current", { packages: ["gauge"] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): void {
    const data = this.gLib.visualization.arrayToDataTable([
      ["Label", "Value"],
      ["Memory", 80],
      ["CPU", 55],
      ["Network", 68],
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
  }
}

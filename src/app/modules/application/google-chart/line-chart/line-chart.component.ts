import { Component, OnInit } from '@angular/core';

import { GoogleChartService } from  '../service/google-chart.service';

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent implements OnInit {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();

    // Load the Visualization API and the controls package.
    this.gLib.charts.load("current", { packages: ["corechart", "table"] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {}

  // method using the Google Charts library using the gLib variable
  // create a new chart using the LineChart method, passing in the container div to show the line chart.
  private drawChart() {
    const data = this.gLib.visualization.arrayToDataTable([
      ["Year", "Sales", "Expenses"],
      ["2004", 1000, 400],
      ["2005", 1170, 460],
      ["2006", 660, 1120],
      ["2007", 1030, 540],
    ]);

    const options = {
      title: "Company Performance",
      curveType: "function",
      legend: { position: "bottom" },
    };

    const chart = new this.gLib.visualization.LineChart(
      document.getElementById("divLineChart")
    );

    chart.draw(data, options);
  }
}

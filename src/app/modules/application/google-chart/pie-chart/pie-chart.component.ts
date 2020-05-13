import { Component, OnInit } from "@angular/core";
import { GoogleChartService } from "../service/google-chart.service";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"],
})
export class PieChartComponent implements OnInit {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();

    // Load the Visualization API and the controls package.
    this.gLib.charts.load("current", { packages: ["corechart", "table"] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {}

  private drawChart() {
    const chart = new this.gLib.visualization.PieChart(
      document.getElementById("divPieChart")
    );
    const data = new this.gLib.visualization.DataTable();
    data.addColumn("string", "Accessories");
    data.addColumn("number", "Quantity");
    data.addRows([
      ["Computers", 3],
      ["Hard Drives", 6],
      ["Printers", 4],
      ["Monitors", 5],
      ["RAM", 2],
    ]);

    const options = { title: "Sales Info" };

    chart.draw(data, options);
  }
}

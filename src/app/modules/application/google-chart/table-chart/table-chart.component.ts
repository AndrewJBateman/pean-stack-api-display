import { Component, OnInit } from "@angular/core";
import { GoogleChartService } from "../service/google-chart.service";

@Component({
  selector: "app-table-chart",
  templateUrl: "./table-chart.component.html",
  styleUrls: ["./table-chart.component.css"],
})
export class TableChartComponent implements OnInit {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();

    this.gLib.charts.load("current", { packages: ["corechart", "table"] });

    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  ngOnInit() {}

  private drawChart() {
    const chart = new this.gLib.visualization.Table(
      document.getElementById("divTableChart")
    );
    const data = new this.gLib.visualization.DataTable();

    data.addColumn("string", "Year");
    data.addColumn("number", "Sales");
    data.addColumn("number", "Expenses");

    data.addRows([
      ["2004", 1000, 400],
      ["2005", 1170, 460],
      ["2006", 660, 1120],
      ["2007", 1030, 540],
    ]);

    const options = {
      title: "Sales Tabular Data",
      width: "100%",
      height: "100%",
    };
    chart.draw(data, options);
  }
}

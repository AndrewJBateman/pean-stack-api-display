import { Component, OnInit } from "@angular/core";
import { GoogleChartService } from "../../../../services/google-chart.service";

@Component({
  selector: "app-table-chart",
  templateUrl: "./table-chart.component.html",
  styleUrls: ["./table-chart.component.css"],
})
export class TableChartComponent implements OnInit {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();

    this.gLib.charts.load("current", { packages: ["table"] });

    this.gLib.charts.setOnLoadCallback(this.drawTable.bind(this));
  }
  ngOnInit() {}

  private drawTable() {
    const table = new this.gLib.visualization.Table(
      document.getElementById("divTableChart")
    );
    const data = new this.gLib.visualization.DataTable();

    data.addColumn("string", "Country");
    data.addColumn("number", "Population (millions)");
    data.addColumn("boolean", "Borders Mediterranean");

    data.addRows([
      ["Russia", 146, false],
      ["Germany", 84, false],
      ["Turkey", 84, true],
      ["France", 65, true],
      ["UK", 68, false],
      ["Italy", 60, true],
      ["Spain", 47, true],
      ["Poland", 38, false],
      ["Ukraine", 44, false],
      ["Romania", 19, false]
    ]);

    const options = {
      title: "Top Ten European Countries by Populations",
      showRowNumber: true
    };
    table.draw(data, options);
  }
}

import { Component } from "@angular/core";

import { GoogleChartService } from "../data-services/google-chart.service";
import { CrudService } from "../data-services/crud.service";
import { CountryData } from "../data-models/countryData";

@Component({
  selector: "app-table-chart",
  templateUrl: "./table-chart.component.html",
  styleUrls: ["./table-chart.component.css"],
})
export class TableChartComponent {
  private gLib: any;

  constructor(
    private gChartService: GoogleChartService,
    private crudService: CrudService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", { packages: ["table"] });
    this.gLib.charts.setOnLoadCallback(this.drawTable.bind(this));
  }

  private drawTable(): void {
    const dbDataArr = [];
    this.crudService.getCountryData().subscribe((items: CountryData[]) => {
      dbDataArr.push(...items);
      const chartDataArray = [];
      dbDataArr.forEach((item) =>
        chartDataArray.push([item.name, item.population, item.bordersmed])
      );
      const table = new this.gLib.visualization.Table(
        document.getElementById("divTableChart")
      );
      const data = new this.gLib.visualization.DataTable();

      data.addColumn("string", "Country");
      data.addColumn("number", "Pop. (MM)");
      data.addColumn("boolean", "Borders Med.");
      data.addRows([...chartDataArray]);

      const cssClassNames = {
        tableCell: "cssTableCell",
      };

      const options = {
        title: "Top Ten European Countries by Population",
        showRowNumber: false,
        allowHtml: true,
        cssClassNames
      };

      table.draw(data, options);
    });
  }
}

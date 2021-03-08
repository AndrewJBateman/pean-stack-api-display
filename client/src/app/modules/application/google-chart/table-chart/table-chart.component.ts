import { Component } from "@angular/core";

import { GoogleChartService } from "../../../../services/google-chart.service";
import { CrudService } from "src/app/services/crud.service";
import { CountryData } from "src/app/models/countryData";

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
    let dbDataArr = [];
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
      data.addColumn("number", "Pop'n (mln)");
      data.addColumn("boolean", "Borders Med. Sea");
      data.addRows([...chartDataArray]);

      const options = {
        title: "Top Ten European Countries by Populations",
        showRowNumber: true,
        allowHtml: true,
        cssClassNames: cssClassNames
      };
      var cssClassNames = {
        'headerRow': 'cssHeaderRow',
        'tableRow': 'cssTableRow',
        'oddTableRow': 'cssOddTableRow',
        'selectedTableRow': 'cssSelectedTableRow',
        'hoverTableRow': 'cssHoverTableRow',
        'headerCell': 'cssHeaderCell',
        'tableCell': 'cssTableCell',
        'rowNumberCell': 'cssRowNumberCell'
    };
      table.draw(data, options);
    });
  }
}

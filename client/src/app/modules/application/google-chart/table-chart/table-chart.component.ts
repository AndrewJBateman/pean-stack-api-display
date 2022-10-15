import { Component, Input } from "@angular/core";

import { GoogleChartService } from "../data-services/google-chart.service";
import { CrudService } from "../data-services/crud.service";
import { CountryData } from "../data-models/countryData";
import countryData from "../../../../../assets/jsonData/countryData.json";

@Component({
  selector: "app-table-chart",
  templateUrl: "./table-chart.component.html",
  styleUrls: ["./table-chart.component.css"],
})
export class TableChartComponent {
  @Input() isProd: boolean = true;
  private gLib: any;
  countryData: CountryData[] = countryData;

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
    const tempDataArray = [];
    const cssClassNames = {
      tableCell: "cssTableCell",
    };
    const options = {
      showRowNumber: false,
      allowHtml: true,
      cssClassNames,
    };

    this.isProd
      ? this.crudService.getCountryData().subscribe((items: CountryData[]) => {
          dbDataArr.push(...items);
          dbDataArr.forEach((item) =>
            tempDataArray.push([item.name, item.population, item.bordersMed])
          );
        })
      : countryData.forEach((item) =>
          tempDataArray.push([item.name, item.population, item.bordersMed])
        );

    // create chart data using the above database or assets data
    const table = new this.gLib.visualization.Table(
      document.getElementById("divTableChart")
    );
    const data = new this.gLib.visualization.DataTable();
    data.addColumn("string", "Country");
    data.addColumn("number", "Pop. (MM)");
    data.addColumn("boolean", "Borders Med.");
    data.addRows([...tempDataArray]);
    table.draw(data, options);
  }
}

import { Component, Input } from "@angular/core";

import { GoogleChartService } from "../data-services/google-chart.service";
import { CrudService } from "../data-services/crud.service";
import { CompanyPerformance } from "../data-models/companyPerformance";
import compPerfData from "../../../../../assets/jsonData/compPerfData.json";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent {
  @Input() isProd: boolean = true;
  private gLib: any;
  compPerfData: CompanyPerformance[] = compPerfData;

  constructor(
    private gChartService: GoogleChartService,
    private crudService: CrudService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", { packages: ["corechart", "table"] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): void {
    const dbDataArr = [];
    const tempDataArray = [];
    const options = {
      subtitle: "in millions of euro (EUR)",
      vAxis: { title: "Revenue (million euro)" },
      hAxis: { title: "Year" },
      width: 350,
      height: 300,
      curveType: "function",
      legend: { position: "bottom" },
    };
    this.isProd
      ? this.crudService
          .getCompanyPerformance()
          .subscribe((items: CompanyPerformance[]) => {
            dbDataArr.push(...items);
            dbDataArr.forEach((item) =>
              tempDataArray.push([item.year, item.sales, item.expenses])
            );
          })
      : compPerfData.forEach((item) =>
          tempDataArray.push([item.year, item.sales, item.expenses])
        );

    // create chart data using the above database or assets data
    const data = this.gLib.visualization.arrayToDataTable([
      ["Year", "Sales", "Expenses"],
      ...tempDataArray,
    ]);
    const chart = new this.gLib.visualization.LineChart(
      document.getElementById("divLineChart")
    );
    chart.draw(data, options);
  }
}

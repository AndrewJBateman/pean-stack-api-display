import { Component } from "@angular/core";

import { GoogleChartService } from "../../../../services/google-chart.service";
import { CrudService } from "../../../../services/crud.service";
import { CompanyPerformance } from "../../../../models/companyPerformance";
import { Observable } from "rxjs";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent {
  private gLib: any;
  private crudData: Observable<CompanyPerformance[]>

  constructor(private gChartService: GoogleChartService, private crudService: CrudService) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", { packages: ["corechart", "table"] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): void {
    let dbDataArr = [];
    this.crudService.getCompanyPerformance().subscribe((items: CompanyPerformance[]) => {
      dbDataArr.push(...items);
      const tempDataArray = [];
      dbDataArr.forEach(
        item => tempDataArray.push([item.year, item.sales, item.expenses])
      );
      const chartDataArr = [["Year", "Sales", "Expenses"], ...tempDataArray];
      const data = this.gLib.visualization.arrayToDataTable(chartDataArr);

      const options = {
        title: "Yearly Company Performance",
        subtitle: 'in millions of euro (EUR)',
        vAxis: { title: "Revenue (million euro)" },
        hAxis: { title: "Year" },
        width: 400,
        height: 300,
        curveType: "function",
        legend: { position: "bottom" },
      };

      const chart = new this.gLib.visualization.LineChart(
        document.getElementById("divLineChart")
      );
      chart.draw(data, options);
    });

  }
}

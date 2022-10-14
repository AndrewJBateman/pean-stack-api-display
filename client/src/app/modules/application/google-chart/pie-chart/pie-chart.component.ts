import { Component } from "@angular/core";
import { FrameworkMarketshare } from "../data-models/frameworkMarketshare";
import { CrudService } from "../data-services/crud.service";
import { GoogleChartService } from "../data-services/google-chart.service";
import frameworkMarketData from "../../../../../assets/jsonData/frameworkMarketData.json";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"],
})
export class PieChartComponent {
  private gLib: any;
  frameworkMarketData: FrameworkMarketshare[] = frameworkMarketData;

  constructor(
    private gChartService: GoogleChartService,
    private crudService: CrudService
  ) {
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load("current", { packages: ["corechart"] });
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): void {
    const dbDataArr = [];
    this.crudService
      .getFrameworkMarketshare()
      .subscribe((items: FrameworkMarketshare[]) => {
        dbDataArr.push(...items);
        const chartDataArray = [];
        dbDataArr.forEach((item) =>
          chartDataArray.push([item.framework, +item.share])
        );
        const chart = new this.gLib.visualization.PieChart(
          document.getElementById("divPieChart")
        );
        const data = new this.gLib.visualization.DataTable();
        data.addColumn("string", "Framework");
        data.addColumn("number", "%");
        data.addRows([...chartDataArray]);

        const options = {
          // title: "Top Framework Job Market Share",
          // legend:'none',
          // width: '80%',
          // height: '80%',
          chartArea: {
            left: "3%",
            top: "3%",
            height: "94%",
            width: "94%",
          },
          is3D: true,
          pieHole: 0.2,
          pieSliceTextStyle: {
            color: "white",
            margin: 0,
            padding: 0,
            // position: "center",
          },
        };
        chart.draw(data, options);
      });
  }
}

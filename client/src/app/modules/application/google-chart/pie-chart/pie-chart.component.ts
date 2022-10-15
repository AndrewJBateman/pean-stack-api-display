import { Component, Input } from "@angular/core";
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
  @Input() isProd: boolean = true;
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
    const tempDataArray = [];
    const options = {
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

    this.isProd
      ? this.crudService
          .getFrameworkMarketshare()
          .subscribe((items: FrameworkMarketshare[]) => {
            dbDataArr.push(...items);
            dbDataArr.forEach((item) =>
              tempDataArray.push([item.framework, +item.share])
            );
          })
      : frameworkMarketData.forEach((item) =>
          tempDataArray.push([item.framework, +item.share])
        );

    // create chart data using the above database or assets data
    const data = new this.gLib.visualization.DataTable();
    const chart = new this.gLib.visualization.PieChart(
      document.getElementById("divPieChart")
    );
    data.addColumn("string", "Framework");
    data.addColumn("number", "%");
    data.addRows([...tempDataArray]);
    chart.draw(data, options);
  }
}

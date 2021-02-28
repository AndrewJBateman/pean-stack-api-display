import { Component} from "@angular/core";
import { GoogleChartService } from "../../../../services/google-chart.service";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"],
})
export class PieChartComponent {
  private gLib: any;

  constructor(private gChartService: GoogleChartService) {
    this.gLib = this.gChartService.getGoogle();

    // Load the Visualization API and the controls package.
    this.gLib.charts.load("current", { packages: ["corechart"] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(): void {
    const chart = new this.gLib.visualization.PieChart(
      document.getElementById("divPieChart")
    );
    const data = new this.gLib.visualization.DataTable();
    data.addColumn("string", "Framework");
    data.addColumn("number", "%");
    data.addRows([
      ["React", 44.3],
      ["Angular", 29.4],
      ["jQuery", 19.7],
      ["Vue", 6.6],
    ]);

    const options = { title: "Top Framework Job Market Share", pieHole: 0.2 };

    chart.draw(data, options);
  }
}

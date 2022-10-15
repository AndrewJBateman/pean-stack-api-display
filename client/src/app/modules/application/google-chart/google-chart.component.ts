import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-google-chart",
  templateUrl: "./google-chart.component.html",
  styleUrls: ["./google-chart.component.css"],
})
export class GoogleChartComponent implements OnInit {
  isProd = true;

  ngOnInit(): void {
    !environment.production ? (this.isProd = false) : null;
  }
}

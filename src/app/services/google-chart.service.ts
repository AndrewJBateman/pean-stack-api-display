import { Injectable } from "@angular/core";
import { GoogleChartServiceModule } from "./google-chart.service.module";

declare const google: any;

@Injectable({
  providedIn: GoogleChartServiceModule,
})
export class GoogleChartService {
  private google: any;
  constructor() {
    this.google = google;
  }

  getGoogle() {
    return this.google;
  }
}

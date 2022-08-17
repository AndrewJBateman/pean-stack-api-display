import { Injectable } from "@angular/core";
import { GoogleChartServiceModule } from "../data-services/google-chart.service.module";

declare const google: any;

@Injectable({
  providedIn: GoogleChartServiceModule,
})
export class GoogleChartService {
  private google: any;
  constructor() {
    this.google = google;
  }

  getGoogle(): any {
    return this.google;
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Location } from "../models/location";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  locationSearchUrl = "https://ipapi.co/json/";

  constructor(private httpClient: HttpClient) {}

  getLocation() {
    return this.httpClient.get<Location>(this.locationSearchUrl);
  }
}

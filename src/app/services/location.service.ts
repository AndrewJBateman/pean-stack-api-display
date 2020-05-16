import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Location } from "../models/location";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation() {
    const locationSearchUrl = "https://ipapi.co/json/";

    return this.http.get<Location>(locationSearchUrl).pipe(
      map((data: Location) => data),
      catchError((err) => {
        return throwError("Location not found, error: ", err);
      })
    );
  }
}

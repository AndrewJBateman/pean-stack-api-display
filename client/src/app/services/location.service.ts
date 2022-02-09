import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, take } from "rxjs/operators";

import { Location } from "../models/location";

const apiUrl = "https://ipapi.co/json/";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(): Observable<Location> {
    return this.http.get<Location>(apiUrl).pipe(
      take(1),
      catchError((err) => {
        throw "error in getting API data. Details: " + err;
      })
    );
  }
}

import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Apod } from "../models/apod";
import { catchError, take } from "rxjs/operators";

const apiUrl = "https://api.nasa.gov/planetary/apod?";
const apiKey = process.env.NASA_KEY;
// const apiKey = "DEV: YOUR API KEY HERE";

@Injectable({
  providedIn: "root",
})
export class NasaService {
  constructor(private http: HttpClient) {}

  //  rxjs take(1) takes the first emission of Nasa data and unsubscribes from the observable.
  getNasaImage(): Observable<Apod> {
    console.log("API key: ", apiKey)
    const apodUrl = `${apiUrl}&api_key=${apiKey}&hd=true`;
    return this.http.get<Apod>(apodUrl).pipe(
      take(1),
      catchError((err) => {
        return throwError("Problem fetching apod from NASA API, error: ", err);
      })
    );
  }
}

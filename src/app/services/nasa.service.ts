import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { Apod } from "../models/apod";
import { environment } from "../../environments/environment";
import { map, catchError } from "rxjs/operators";

const apiUrl = "https://api.nasa.gov/planetary/apod?";
const apiKey = environment.NASA_KEY;

@Injectable({
  providedIn: "root",
})
export class NasaService {
  constructor(private http: HttpClient) {}

  getNasaImage(): Observable<Apod> {
    // const year = new Date().getFullYear();
    // const month = new Date().getMonth() + 1;
    // const day = new Date().getDate();
    // const apodUrl = `${apiUrl}date=${year}-${month}-${day}&api_key=${apiKey}&hd=true`;
    const apodUrl = `${apiUrl}&api_key=${apiKey}&hd=true`;  
    return this.http.get<Apod>(apodUrl).pipe(
      map((data: Apod) => data),
      catchError((err) => {
        return throwError("Problem fetching apod from NASA API, error: ", err);
      })
    );
  }
}

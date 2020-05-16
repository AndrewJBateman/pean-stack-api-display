import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { Apod } from "../models/apod";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class NasaService {
  apiKey: string = "";

  constructor(private http: HttpClient) {}

  public getNasaImage(): Observable<Apod> {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    this.apiKey = environment.NASA_KEY;
    const apodUrl = `https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=${this.apiKey}&hd=true`;
    return this.http.get<Apod>(apodUrl);
  }
}

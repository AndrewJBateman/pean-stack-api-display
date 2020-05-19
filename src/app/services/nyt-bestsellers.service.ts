import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { NytApiResponse } from "../models/nyt";
import { environment } from "../../environments/environment";

const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?";
const apiKey = environment.NYT_KEY;
console.log('apiKey: ', apiKey);

@Injectable({
  providedIn: "root",
})
export class NytBestsellersService {
  constructor(private http: HttpClient, private router: Router) {}

  getBooks() {
    const booksUrl = `${apiUrl}api-key=${apiKey}`
    console.log('url: ', booksUrl);
    return this.http.get<any>(booksUrl).pipe(
      map((data) => data),
      catchError((err) => {
        return throwError(
          "Problem fetching bestsellers from API, error: ",
          err
        );
      })
    );
  }
}

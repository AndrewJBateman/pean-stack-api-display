import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { NytApiResponse } from "../models/nyt";
import { environment } from "../../environments/environment";

const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/overview/2020-05-20.json?";
const apiKey = environment.NYT_KEY;

@Injectable({
  providedIn: "root",
})
export class NytBestsellersService {
  constructor(private http: HttpClient, private router: Router) {}

  getBooks() {
    const booksUrl = `${apiUrl}api-key=${apiKey}`
    console.log('url: ', booksUrl);
    return this.http.get<NytApiResponse>(booksUrl).pipe(
      map((data: NytApiResponse) => data.results.lists),
      catchError((err) => {
        return throwError(
          "Problem fetching bestsellers from API, error: ",
          err
        );
      })
    );
  }
}

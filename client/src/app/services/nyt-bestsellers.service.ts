// require('dotenv').config();

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, take} from "rxjs/operators";

import { Books } from "../models/nyt";

const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json?";
const apiKey = process.env.NYT_BEST_KEY;
// const apiKey = "DEV: YOUR API KEY HERE"

@Injectable({
  providedIn: "root",
})
export class NytBestsellersService {
  currentBestseller: any;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Books> {
    const booksUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get<Books>(booksUrl).pipe(
      take(1),
      catchError((err) => {
        return throwError(
          "Problem fetching bestsellers from API, error: ",
          err
        );
      })
    );
  }
}

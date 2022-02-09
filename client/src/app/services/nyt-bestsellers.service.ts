import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, map, take, tap, filter } from "rxjs/operators";

import { Book } from "../models/books";

const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json?";
const apiKey = process.env.NYT_BEST_KEY;

// const apiKey = "DEV: YOUR API KEY HERE"

@Injectable({
  providedIn: "root",
})
export class NytBestsellersService {
  currentBestseller: any;

  constructor(private http: HttpClient) {}




  getBooks(): Observable<Book[]> {
    const booksUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get<any>(booksUrl).pipe(
      take(1),
      map(items => items.filter(item => item.volumeInfo.imageLinks != null)),
      catchError((err) => {
        throw 'error in getting API data. Details: ' + err;
      })
    );
  }
}

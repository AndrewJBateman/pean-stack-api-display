import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, take } from "rxjs/operators";

import { Books, List } from "../nyt-models/nyt";

const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?";
const apiKey = process.env.NYT_BEST_KEY;

// const apiKey = "YOUR DEV KEY HERE"

@Injectable({
  providedIn: "root",
})
export class NytBestsellersService {
  currentBestseller: any;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Books | List[]> {
    const booksUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get<Books | List[]>(booksUrl).pipe(
      take(1),
      map((items:Books) => items.results.lists),
      catchError((err) => {
        throw 'error in getting API data. Details: ' + err;
      })
    );
  }
}

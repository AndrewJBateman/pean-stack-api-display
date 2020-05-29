import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { NytApiResponse } from "../models/nyt";
import { environment } from "../../environments/environment";

const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/overview.json?";
const apiKey = environment.NYT_KEY;

@Injectable({
  providedIn: "root",
})
export class NytBestsellersService {
  currentBestseller: any;

  constructor(private http: HttpClient) {}

  getBooks() {
    const booksUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get<any>(booksUrl).pipe(
      map((data: any) => data.results.lists),
      catchError((err) => {
        return throwError(
          "Problem fetching bestsellers from API, error: ",
          err
        );
      })
    );
  }
}

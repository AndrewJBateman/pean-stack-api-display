import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { TopStories } from "../models/nyt";
import { environment } from "../../environments/environment";

const apiUrl = "https://api.nytimes.com/svc/topstories/v2/home.json?";
const apiKey = environment.NYT_NEWS_KEY;

@Injectable({
  providedIn: "root",
})
export class NytNewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    const booksUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get<TopStories>(booksUrl).pipe(
      map((data: TopStories) => data),
      catchError((err) => {
        return throwError("Problem fetching news from API, error: ", err);
      })
    );
  }
}

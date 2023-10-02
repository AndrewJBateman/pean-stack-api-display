import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map, take, tap } from "rxjs/operators";

import { TopStories, TopStory } from "../news-models/nyt-news";

const apiUrl = "https://api.nytimes.com/svc/topstories/v2/home.json?";
// const apiKey = process.env.NYT_NEWS_KEY;
const apiKey = "DEV API KEY HERE";

@Injectable({
  providedIn: "root",
})
export class NytNewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<TopStory[]> {
    if (apiKey !== undefined) {
      const newsUrl = `${apiUrl}api-key=${apiKey}`;
      return this.http.get<TopStories>(newsUrl).pipe(
        take(1),
        map((res) => res.results),
        catchError((err) => {
          throw "error in getting API data. Details: " + err;
        })
      );
    } else {
      return null;
    }
  }
}

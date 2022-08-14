import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, take } from "rxjs/operators";

import { TopStories } from "../modules/application/nyt-bestsellers/nyt-models/nyt";

const apiUrl = "https://api.nytimes.com/svc/topstories/v2/home.json?";
const apiKey = process.env.NYT_NEWS_KEY;
// const apiKey = "YOUR API KEY"

@Injectable({
  providedIn: "root",
})
export class NytNewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<TopStories> {
    const newsUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get<TopStories>(newsUrl).pipe(
      take(1),
      catchError((err) => {
        throw "error in getting API data. Details: " + err;
      })
    );
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { throwError, Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { NewsApiResponse } from "../models/news";
import { Article } from "../models/news";
import { environment } from "../../environments/environment";

const newsApiUrl = "https://newsapi.org/v2";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  currentArticle: any; // used by news-detail page

  constructor(private http: HttpClient, private router: Router) {}

  // fetch news from news API using url input
  getNews(url: string): Observable<NewsApiResponse> {
    let newsUrl = `${newsApiUrl}/${url}`;
    const params = new HttpParams().set("apiKey", environment.NEWS_KEY);

    return this.http
      .get<NewsApiResponse>(newsUrl, { params })
      .pipe(
        map((data: NewsApiResponse) => data),
        catchError((err) => {
          return throwError("Problem fetching news from API, error: ", err);
        })
      );
  }

  // navigate to news-detail page to show article detail
  getNewsDetail(article: Article) {
    this.currentArticle = article;
    this.router.navigate(["/news-detail"]);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { throwError, Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { NewsApiResponse } from "../models/news";
import { Article } from "../models/news";
import { environment } from "../../environments/environment";

const apiUrl = "https://newsapi.org/v2";
const apiKey = environment.NEWS_KEY;

@Injectable({
  providedIn: "root",
})
export class NewsService {
  currentArticle: any; // used by news-detail page

  constructor(private http: HttpClient, private router: Router) {}

  // fetch news from news API using url input
  getNews(url: string): Observable<NewsApiResponse> {
    const newsUrl = `${apiUrl}/${url}&apiKey=${apiKey}`;
    return this.http.get<NewsApiResponse>(newsUrl).pipe(
      // tap((data: NewsApiResponse) => console.log("tapped data: ", data)),
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

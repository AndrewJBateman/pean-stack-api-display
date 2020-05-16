import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { SourcesResponse, NewsApiResponse } from "../models/news";
import { Article } from "../models/news";
import { LocationService } from "../services/location.service";
import { environment } from "../../environments/environment";

const apiUrl = "https://newsapi.org/v2";
const apiKey = environment.NEWS_KEY;

@Injectable({
  providedIn: "root",
})
export class NewsService implements OnInit {
  currentArticle: any; // used by news-detail page

  constructor(
    private http: HttpClient,
    private locationService: LocationService,
    private router: Router
  ) {}

  // fetch country code from ip location API
  ngOnInit() {
    this.locationService.getLocation();
  }

  // fetch sources from news API using url input
  getSources(url: string) {
    return this.http.get(`${apiUrl}/${url}&apiKey=${apiKey}`).pipe(
      map((data: SourcesResponse) => data),
      catchError((err) => {
        return throwError("News sources not found, error: ", err);
      })
    );
  }

  // fetch news from news API using url input
  getNews(url: string) {
    return this.http.get(`${apiUrl}/${url}&apiKey=${apiKey}`).pipe(
      map((data: NewsApiResponse) => data),
      catchError((err) => {
        return throwError("Problem fetching news from API, error: ", err);
      })
    );
  }

  // navigate to news-detail page to show article detail
  getNewsDetail(article: Article) {
    this.currentArticle = article;
    console.log("news item clicked - show news-detail");
    this.router.navigate(["/news-detail"]);
  }
}

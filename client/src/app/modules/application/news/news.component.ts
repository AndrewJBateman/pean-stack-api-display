import { Component, OnInit } from "@angular/core";

import { NytNewsService } from "./news-services/nyt-news.service";
import { TopStory, TopStories } from "./news-models/nyt-news";
import { Observable } from "rxjs";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  mArticles$: Observable<TopStories | TopStory[]>;

  constructor(private newsService: NytNewsService) {}

  ngOnInit(): void {
    this.getNytNews();
  }

  getNytNews(): void {
    this.mArticles$ = this.newsService.getNews();
  }

  newsTrackbyFn(index: number, item: any): number {
    return item.newsId;
  }
}

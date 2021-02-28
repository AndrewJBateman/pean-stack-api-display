import { Component, OnInit } from "@angular/core";

import { NytNewsService } from "../../../services/nyt-news.service";
import { TopStory, TopStories } from "../../../models/nyt";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  mArticles: Array<TopStory>;

  constructor(private newsService: NytNewsService) {}

  ngOnInit(): void {
    this.getNytNews();
  }

  getNytNews(): any {
    this.newsService.getNews().subscribe((data: TopStories) => {
      this.mArticles = data.results;
    });
  }
}

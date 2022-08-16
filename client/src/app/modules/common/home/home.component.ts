import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { NgxPictureConfig, NGX_PICTURE_CONFIG } from "ngx-picture";
import { PictureComponent } from "ngx-picture";

import { Meta, Title } from "@angular/platform-browser";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  breakpoints = this.ngxPictureConfig.breakpoints;

  @ViewChild("picture", { static: false })
  picture: PictureComponent;

  name = environment.application.name;

  features: any;

  constructor(
    @Inject(NGX_PICTURE_CONFIG)
    private ngxPictureConfig: NgxPictureConfig,
    private meta: Meta,
    private titleService: Title
  ) {
    this.features = [
      {
        type: "Nasa",
        title: "Nasa API",
        description: "Astronomy Picture of the Day.",
        image: "nasa.jpg",
        link: "nasa",
      },
      {
        type: "Crypto",
        title: "Cryptocurrency API",
        description: "Cryptocurrency data table",
        image: "crypto.jpg",
        link: "crypto",
      },
      {
        type: "Map",
        title: "Map API",
        description: "Current location shown on map.",
        image: "map.jpg",
        link: "map",
      },
      {
        type: "News",
        title: "News API",
        description: "News from the user's country.",
        image: "news.jpg",
        link: "news",
      },
      {
        type: "Google-charts",
        title: "Google Charts",
        description: "Data shown using Google charts",
        image: "google-charts.jpg",
        link: "google-charts",
      },
      {
        type: "Books",
        title: "Books API",
        description: "Google book search facility",
        image: "books.jpg",
        link: "books",
      },
      {
        type: "Bestsellers",
        title: "Bestsellers API",
        description: "New York Times Bestsellers",
        image: "nyt-bestsellers.jpg",
        link: "nyt-bestsellers",
      },
      {
        type: "Github",
        title: "Github API",
        description: "Github repo search",
        image: "github.jpg",
        link: "github",
      },
    ];
  }

  ngOnInit(): void {
    this.titleService.setTitle("Angular APIs");
    this.meta.addTag({
      name: "Angular app",
      content: "andrewbateman.org",
    });
    this.meta.updateTag({
      name: "description",
      content: "This is a PWA app",
    });
  }

  featureTrackbyFn(index: number, item: any): number {
    return item.featureId;
  }
}

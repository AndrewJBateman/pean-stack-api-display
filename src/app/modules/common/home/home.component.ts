import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  name = environment.application.name;

  features: any;

  constructor(private meta: Meta, private titleService: Title) {
    this.features = [
      {
        icon: "fas fa-satellite-dish",
        type: "Nasa",
        title: "Nasa API",
        description: "Astronomy Picture of the Day.",
        image: "nasa.jpg",
        link: "nasa",
      },
      {
        icon: "fab fa-btc",
        type: "Crypto",
        title: "Cryptocurrency API",
        description: "Cryptocurrency data table",
        image: "crypto.jpg",
        link: "crypto",
      },
      {
        icon: "fas fa-map-marker",
        type: "Map",
        title: "Map API",
        description: "Current location shown on map.",
        image: "map.jpg",
        link: "map",
      },
      {
        icon: "far fa-newspaper",
        type: "News",
        title: "News API",
        description: "News from the user's country.",
        image: "news.jpg",
        link: "news",
      },
      {
        icon: "fas fa-chart-bar",
        type: "Google-charts",
        title: "Google Charts",
        description: "Data shown using Google charts",
        image: "google-charts.jpg",
        link: "google-charts",
      },
      {
        icon: "fas fa-book-open",
        type: "Books",
        title: "Books API",
        description: "Google book search facility",
        image: "books.jpg",
        link: "books",
      },
      {
        icon: "fas fa-book-reader",
        type: "Bestsellers",
        title: "Bestsellers API",
        description: "New York Times Bestsellers",
        image: "nyt-bestsellers.jpg",
        link: "nyt-bestsellers",
      },
      {
        icon: "fab fa-github",
        type: "Github",
        title: "Github API",
        description: "Github repo search",
        image: "github.jpg",
        link: "github",
      }
    ];
  }

  ngOnInit() {
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
}

import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  name = environment.application.name;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  isHomeRoute() {
    return this.router.url === "/";
  }

  isNasaRoute() {
    return this.router.url === "/nasa";
  }

  isCryptoRoute() {
    return this.router.url === "/crypto";
  }

  isMapRoute() {
    return this.router.url === "/map";
  }

  isNewsRoute() {
    return this.router.url === "/news";
  }

  isGoogleChartsRoute() {
    return this.router.url === "/google-charts";
  }

  isBooksRoute() {
    return this.router.url === "/books";
  }

  isBookDetailRoute() {
    return this.router.url.includes("/book-detail");
  }

  isNytBestsellersRoute() {
    return this.router.url === "/nyt-bestsellers";
  }

  isBestsellerDetailRoute() {
    return this.router.url.includes("/bestseller-detail");
  }

  isGithubUserRoute() {
    return this.router.url === ("/github");
  }

  isGithubRepoRoute() {
    return this.router.url.includes("/github-repos");
  }

  isAboutRoute() {
    return this.router.url === "/about";
  }

  isContactRoute() {
    return this.router.url === "/contact";
  }

}

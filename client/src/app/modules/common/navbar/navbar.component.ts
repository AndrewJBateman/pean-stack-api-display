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

  isHomeRoute(): boolean {
    return this.router.url === "/";
  }

  isNasaRoute(): boolean {
    return this.router.url === "/nasa";
  }

  isCryptoRoute(): boolean {
    return this.router.url === "/crypto";
  }

  isMapRoute(): boolean {
    return this.router.url === "/map";
  }

  isNewsRoute(): boolean {
    return this.router.url === "/news";
  }

  isGoogleChartsRoute(): boolean {
    return this.router.url === "/google-charts";
  }

  isBooksRoute(): boolean {
    return this.router.url === "/books";
  }

  isBookDetailRoute(): boolean {
    return this.router.url.includes("/book-detail");
  }

  isNytBestsellersRoute(): boolean {
    return this.router.url === "/nyt-bestsellers";
  }

  isBestsellerDetailRoute(): boolean {
    return this.router.url.includes("/bestseller-detail");
  }

  isGithubUserRoute(): boolean {
    return this.router.url === ("/github");
  }

  isGithubRepoRoute(): boolean {
    return this.router.url.includes("/github-repos");
  }

  isAboutRoute(): boolean {
    return this.router.url === "/about";
  }

  isContactRoute(): boolean {
    return this.router.url === "/contact";
  }

}

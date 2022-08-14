import { Component, OnInit } from "@angular/core";

import { NytBestsellersService } from "./nyt-services/nyt-bestsellers.service";
import { Book, Books, List } from "./nyt-models/nyt";
import { Observable } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-nyt-bestsellers",
  templateUrl: "./nyt-bestsellers.component.html",
  styleUrls: ["./nyt-bestsellers.component.css"],
})
export class NytBestsellersComponent implements OnInit {
  bestsellerLists: Observable<Books | List[]>;
  bestsellers: Array<Book>;
  bestseller: Book;

  constructor(
    private nytBestsellersService: NytBestsellersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBestsellers();
  }

  getBestsellers(): any {
    this.bestsellerLists = this.nytBestsellersService.getBooks();
  }

  onGoToBestsellerDetail(bestseller: Book): any {
    const navigationExtras: NavigationExtras = {
      state: {
        bestseller,
      },
    };
    this.router.navigate(["/bestseller-detail"], navigationExtras);
  }
}

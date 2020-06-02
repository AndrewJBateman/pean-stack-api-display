import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";

import { NytBestsellersService } from "../../../services/nyt-bestsellers.service";
import { Book, Books, List } from "../../../models/nyt";
import { Observable } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-nyt-bestsellers",
  templateUrl: "./nyt-bestsellers.component.html",
  styleUrls: ["./nyt-bestsellers.component.css"],
})
export class NytBestsellersComponent implements OnInit {
  bestsellerLists: Array<List>;
  bestsellers: Array<Book>;
  bestseller: Book;
  // clicked = false;

  constructor(
    private nytBestsellersService: NytBestsellersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBestsellers();
  }

  getBestsellers() {
    this.nytBestsellersService.getBooks().subscribe((data: Books) => {
      this.bestsellerLists = data.results.lists;
    });
  }

  async onGoToBestsellerDetail(bestseller: Book) {
    console.log('book chosen');

    console.log('bestseller chosen: ', bestseller);
    // this.clicked = true;
    let navigationExtras: NavigationExtras = {
      state: {
        bestseller: bestseller,
      },
    };
    await this.router.navigate(["/bestseller-detail"], navigationExtras);
  }
}

import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Book } from "src/app/modules/application/books/book-models/books";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent {
  book: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.book = this.router.getCurrentNavigation().extras.state.book;
      }
    });
  }

  returnToList(): void {
    this.location.back();
  }
}

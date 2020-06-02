import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";

import { GoogleBookService } from "../../../services/book-search.service";
import { Book } from "../../../models/books";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;
  clicked = false;

  constructor(
    private googleBookService: GoogleBookService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  bookQuery(bookTitle: any) {
    if (bookTitle.length > 4) {
      this.books = this.googleBookService.findBook(bookTitle);
    }
  }

  onGoToBookDetail(book: Book): void {
    this.clicked = true;
    const navigationExtras: NavigationExtras = {
      state: {
        book
      },
    };
    this.router.navigate(["/book-detail"], navigationExtras);
  }
}

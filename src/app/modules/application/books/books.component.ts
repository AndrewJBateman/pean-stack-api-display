import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { GoogleBookService } from "../../../services/book-search.service";
import { Book } from "../../../models/books";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private googleBookService: GoogleBookService) {}

  ngOnInit(): void {}

  bookQuery(bookTitle: any) {
    if (bookTitle.length > 4) {
      this.books = this.googleBookService.findBook(bookTitle);
      // this.googleBookService.findBook(bookTitle).subscribe(books => this.books = this.items);
      console.log("books", this.books);
    }
  }
}

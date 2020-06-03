import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

import { GoogleBookService } from "../../../services/book-search.service";
import { Book } from "../../../models/books";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  books: Book[];
  data: Observable<Book[]>;
  searchForm: FormGroup;
  searchedItem: string;
  searchString: string;
  searchedBooks: Book[];
  storedBooks: Book[];
  storedItems = false;

  constructor(
    private googleBookService: GoogleBookService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.storedBooks !== null) {
      this.storedItems = true;
      this.books = JSON.parse(sessionStorage.getItem("this.searchedBooks"));
      console.log("storedBooks array contents: ", this.books);
    } else {
      this.storedItems = false;
      console.log("There are no books in storage");
    }
    this.searchForm = this.fb.group({
      searchQuery: [""],
    });
  }

  clearStore() {
    localStorage.clear();
    this.searchForm.reset()
    this.books = [];
    this.storedItems = false;
  }
  // search for books and store search query.
  bookQuery(userQuery: string): void {
    if (userQuery && userQuery.length) {
      sessionStorage.setItem("this.searchedItem", userQuery);
      this.searchString = sessionStorage.getItem("this.searchedItem");
      this.storedItems = true;
      this.googleBookService
        .findBook(this.searchString)
        .subscribe((data: Book[]) => {
          this.books = data;
          console.log("this.books ", this.books);
          sessionStorage.setItem(
            "this.searchedBooks",
            JSON.stringify(this.books)
          );
          this.storedBooks = JSON.parse(
            sessionStorage.getItem("this.searchedBooks")
          );
        });
    }
  }

  onGoToBookDetail(book: Book): void {
    const navigationExtras: NavigationExtras = {
      state: {
        book,
      },
    };
    this.router.navigate(["/book-detail"], navigationExtras);
  }
}

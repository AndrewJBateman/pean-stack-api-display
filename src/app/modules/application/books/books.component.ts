import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

import { GoogleBookService } from "../../../services/book-search.service";
import { PersistanceService } from "../../../services/localstorage.service";
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
    private fb: FormBuilder,
    private storageService: PersistanceService
  ) {}

  ngOnInit(): void {
    if (this.storedBooks !== null) {
      this.storedItems = true;
      this.books = this.storageService.get("this.searchedBooks");
    } else {
      this.storedItems = false;
      console.log("There is no book search in storage");
    }
    this.searchForm = this.fb.group({
      searchQuery: [""],
    });
  }

  clearStore() {
    this.storageService.clear();
    this.searchForm.reset();
    this.books = [];
    this.storedItems = false;
  }
  // search for books and store search query.
  bookQuery(userQuery: string): void {
    if (userQuery && userQuery.length) {
      this.storageService.set("this.searchedItem", userQuery);
      this.searchString = this.storageService.get("this.searchedItem");
      this.storedItems = true;
      this.googleBookService
        .findBook(this.searchString)
        .subscribe((data: Book[]) => {
          this.books = data;
          this.storageService.set("this.searchedBooks", this.books);
          this.storedBooks = this.storageService.get("this.searchedBooks");
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

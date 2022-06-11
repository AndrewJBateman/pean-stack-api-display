import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Observable } from "rxjs";
import { Router, NavigationExtras } from "@angular/router";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";

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
  searchForm: UntypedFormGroup;
  searchedItem: string;
  searchString: string;
  searchedBooks: Book[];
  booksArray: {};
  storedItems = false;

  constructor(
    private googleBookService: GoogleBookService,
    private router: Router,
    private fb: UntypedFormBuilder,
    private storageService: PersistanceService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    // check if platform browser then show stored book array if it exists
    if (isPlatformBrowser(this.platformId)) {
      if (this.booksArray !== null) {
        this.storedItems = true;
        this.booksArray = this.storageService.get("this.searchedBooks");
      } else {
        this.storedItems = false;
        console.log("There is no book search in storage");
      }
    }
    this.searchForm = this.fb.group({
      searchQuery: [""],
    });
  }

  // ngOnDestroy(): void {
  //   this.clearStore();
  // }

  clearStore(): void {
    this.storageService.clear();
    this.searchForm.reset();
    this.booksArray = [];
    this.storedItems = false;
  }
  // search for books and store search query.
  bookQuery(userQuery: string): void {
    if (userQuery && userQuery.length) {
      if (isPlatformBrowser(this.platformId)) {
        this.storageService.set("this.searchedItem", userQuery);
        this.searchString = this.storageService.get("this.searchedItem");
        this.storedItems = true;
        this.googleBookService
          .findBook(this.searchString)
          .subscribe((data: Book[]) => {
            this.books = data;
            this.storageService.set("this.searchedBooks", this.books);
            this.booksArray = this.storageService.get("this.searchedBooks");
          });
      } else {
        this.googleBookService
          .findBook(this.searchString)
          .subscribe((data: Book[]) => {
            this.booksArray = data;
          });
      }
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

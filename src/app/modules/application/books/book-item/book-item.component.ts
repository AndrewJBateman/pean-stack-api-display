import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../../../models/books";

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.css"],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  get id(): string {
    return this.book.id;
  }

  get thumbnail(): string {
    return this.book.volumeInfo.imageLinks
      ? this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:", "")
      : "";
  }

  constructor() {}

  ngOnInit(): void {}
}

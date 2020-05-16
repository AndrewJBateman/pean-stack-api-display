import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksComponent } from "./books.component";
import { BooksRoutingModule } from "./books-routing.module";
import { BookItemComponent } from "./book-item/book-item.component";

@NgModule({
  imports: [CommonModule, BooksRoutingModule],
  exports: [BooksComponent],
  declarations: [BooksComponent, BookItemComponent],
})
export class BooksModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookDetailComponent } from "./book-detail.component";
import { BookDetailRoutingModule } from "./book-detail-routing.module";

@NgModule({
  imports: [CommonModule, BookDetailRoutingModule],
  exports: [BookDetailComponent],
  declarations: [BookDetailComponent],
})
export class BookDetailModule {


}

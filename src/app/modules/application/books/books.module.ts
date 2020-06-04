import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BooksComponent } from "./books.component";
import { BooksRoutingModule } from "./books-routing.module";
import { PersistanceService } from '../../../services/localstorage.service';

@NgModule({
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [BooksComponent],
  declarations: [BooksComponent],
  providers: [PersistanceService]
})
export class BooksModule {}

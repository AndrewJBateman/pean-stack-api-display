import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../../../../services/book-search.service';
import { Book } from 'src/app/models/books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private googleBookService: GoogleBookService, private router: Router) { }

  ngOnInit(): void {
    this.book = this.googleBookService.currentBook;
  }

  returnToList() {
    this.router.navigate(["/books"]);
  }

}

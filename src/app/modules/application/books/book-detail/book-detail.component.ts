import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../../../../services/book-search.service';
import { Book } from 'src/app/models/books';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private googleBookService: GoogleBookService) { }

  ngOnInit(): void {
    this.book = this.googleBookService.currentBook;
  }

}

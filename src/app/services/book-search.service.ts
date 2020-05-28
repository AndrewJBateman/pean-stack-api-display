import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Book, GoogleBooksApiInterface } from "../models/books";

@Injectable({
  providedIn: "root",
})
export class GoogleBookService {
  currentBook: Book;
  
  private API_URL = "https://www.googleapis.com/books/v1/volumes";

  constructor(private http: HttpClient) {}

  findBook(title: string): Observable<Book[]> {
    return this.http
      .get<GoogleBooksApiInterface>(`${this.API_URL}?q=${title}&maxResults=40`)
      .pipe(map((data: GoogleBooksApiInterface) => data.items));
  }
}

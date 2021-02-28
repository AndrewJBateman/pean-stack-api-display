import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Book, GoogleBooksApiInterface } from "../models/books";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";

@Injectable({
  providedIn: "root",
})
export class GoogleBookService {
  constructor(private http: HttpClient) {}

  findBook(title: string): Observable<Book[]> {
    return this.http
      .get<GoogleBooksApiInterface>(`${apiUrl}?q=${title}&maxResults=40`)
      .pipe(map((data: GoogleBooksApiInterface) => data.items));
  }
}

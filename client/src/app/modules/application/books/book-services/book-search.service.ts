import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap, filter } from "rxjs/operators";

import { Book, GoogleBooksApiInterface } from "../book-models/books";

const apiUrl = "https://www.googleapis.com/books/v1/volumes";

@Injectable({
  providedIn: "root",
})
export class GoogleBookService {
  constructor(private http: HttpClient) {}

  findBook(title: string): Observable<Book[]> {
    return this.http
      .get<GoogleBooksApiInterface>(`${apiUrl}?q=${title}&maxResults=40`)
      .pipe(
        // tap((data: GoogleBooksApiInterface) =>
        //   console.log("data: ", data.items)
        // ),
        map((data: GoogleBooksApiInterface) => data.items?.filter(item => item.saleInfo.saleability !== "NOT_FOR_SALE") || []),
        catchError((err) => {
          throw "error in getting API data. Details: " + err;
        })
      );
  }
}

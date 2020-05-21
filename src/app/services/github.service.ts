import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { User } from "../models/user";

const apiUrl = " https://api.github.com/users/";

@Injectable({
  providedIn: "root",
})
export class GithubService {

  constructor(private http: HttpClient) {}

  getUser(user: string): Observable<User> {
    const searchUrl = `${apiUrl + user}`;

    return this.http.get<User>(searchUrl)
    .pipe(
      tap((data: User) => console.log("tapped data:", data)),
      map((obj) => obj),
      catchError((err) => {
        return throwError(
          "There was a problem fetching data from Github API, error: ",
          err
        );
      })
    );
  }
}

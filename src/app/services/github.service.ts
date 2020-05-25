import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { User } from "../models/user";
import { Repo } from "../models/repo";
import { environment } from "src/environments/environment";

const baseUrl = " https://api.github.com/users/";
const githubKey = environment.GITHUB_KEY;

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(user: string): Observable<User> {
    const userSearchUrl = `${baseUrl + user}`;

    return this.http.get<User>(userSearchUrl).pipe(
      // tap((data: User) => console.log("tapped data:", data)),
      map((obj) => obj),
      catchError((err) => {
        return throwError(
          "There was a problem fetching data from Github API, error: ",
          err
        );
      })
    );
  }

  getRepos(user: string): Observable<Repo> {
    const repoSearchUrl = `${baseUrl + user + "/repos?per_page=100&page=1"}`;
    console.log("searchUrl: ", repoSearchUrl);

    return this.http
      .get<Repo>(repoSearchUrl, {
        params: { access_token: githubKey },
      })
      .pipe(
        // tap((data: Repo) => console.log("tapped data:", data)),
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

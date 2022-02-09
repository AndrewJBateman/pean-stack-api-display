import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, take } from "rxjs/operators";

import { User } from "../models/user";
import { Repo } from "../models/repo";

const baseUrl = "https://api.github.com/users/";
const githubAPIKey = process.env.GITHUB_KEY;
// const githubAPIKey = "DEV: YOUR API KEY HERE";

const params = new HttpParams().set("api_key", githubAPIKey);

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(user: string): Observable<User> {
    const userSearchUrl = `${baseUrl + user}`;
    return this.http.get<User>(userSearchUrl, { params }).pipe(
      take(1),
      catchError((err) => {
        throw "error in getting API data. Details: " + err;
      })
    );
  }

  getRepos(user: string): Observable<Repo> {
    const repoSearchUrl = `${
      baseUrl + user + "/repos?order=updated&sort=desc?per_page=100&page=1"
    }`;

    return this.http.get<Repo>(repoSearchUrl, { params }).pipe(
      take(1),
      catchError((err) => {
        throw "error in getting API data. Details: " + err;
      })
    );
  }
}

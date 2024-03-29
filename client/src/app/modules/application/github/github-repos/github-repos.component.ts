import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { GithubService } from "../../../../services/github.service";
import { Repo } from "../../../../models/repo";
import { Observable } from "rxjs";

@Component({
  selector: "app-github-repos",
  templateUrl: "./github-repos.component.html",
  styleUrls: ["./github-repos.component.css"],
})
export class GithubReposComponent implements OnInit {
  repos: Observable<Repo>;
  userName: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService,
    private location: Location
  ) {}

  // on init run searchRepos function with input username from router params
  ngOnInit(): void {
    this.searchRepos(this.route.snapshot.params.username);
  }

  searchRepos(userName: string): void {
    this.repos = this.githubService.getRepos(userName);
  }

  returnToUser(): void {
    this.location.back();
  }

  repoTrackbyFn(index: number, item: any): number {
    return item.repoId;
  }
}

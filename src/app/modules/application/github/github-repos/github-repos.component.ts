import { Component, OnInit } from "@angular/core";
import { Repo } from "src/app/models/repo";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { GithubService } from "../../../../services/github.service";

@Component({
  selector: "app-github-repos",
  templateUrl: "./github-repos.component.html",
  styleUrls: ["./github-repos.component.css"],
})
export class GithubReposComponent implements OnInit {
  repos: Repo;
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

  searchRepos(userName: string) {
    this.githubService.getRepos(userName).subscribe((repos) => {
      this.repos = repos;
    });
  }

  returnToUser() {
    this.location.back();
  }
}

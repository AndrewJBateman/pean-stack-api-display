import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../../../services/github.service";
import { Repo } from "src/app/models/repo";
import { ActivatedRoute } from "@angular/router";

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
    private githubService: GithubService
  ) {}

  // run seaerchRepos function with input username from router params
  ngOnInit(): void {
    this.searchRepos(this.route.snapshot.params.username);
  }
  searchRepos(userName: string) {
    this.githubService.getRepos(userName).subscribe((repos) => {
      this.repos = repos;
      console.log("this repos: ", this.repos);
    });
  }
}

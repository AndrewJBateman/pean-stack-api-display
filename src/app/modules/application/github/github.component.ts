import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { GithubService } from "../../../services/github.service";

@Component({
  selector: "app-github",
  templateUrl: "./github.component.html",
  styleUrls: ["./github.component.css"],
})
export class GithubComponent implements OnInit {
  user: any;
  form: NgForm;
  displayCleared = false;

  constructor(private router: Router, private githubService: GithubService) {}

  ngOnInit(): void {
    this.getUser("andrewjbateman");
  }

  submitForm(githubSearch: any): any {
    this.getUser(githubSearch.value.name);
  }

  getUser(userName: string): any {
    this.displayCleared = false;
    this.githubService.getUser(userName).subscribe((user) => {
      this.user = user;
    });
  }

  clearUser(): void {
    this.displayCleared = true;
  }
}

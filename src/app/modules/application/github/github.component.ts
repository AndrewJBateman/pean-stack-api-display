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

  constructor(private router: Router, private githubService: GithubService) {}

  ngOnInit(): void {}

  submitForm(myform: any) {
    this.githubService.getUser(myform.value.name).subscribe((user) => {
      this.user = user;
    });
  }
}

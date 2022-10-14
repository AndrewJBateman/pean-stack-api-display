import { Component, OnInit, Input } from "@angular/core";
import { User } from "./../../../../models/user";

@Component({
  selector: "app-github-user",
  templateUrl: "./github-user.component.html",
  styleUrls: ["./github-user.component.css"],
})
export class GithubUserComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { List } from "../nyt-models/nyt-bestsellers";

@Component({
  selector: "app-bestseller-detail",
  templateUrl: "./bestseller-detail.component.html",
  styleUrls: ["./bestseller-detail.component.css"],
})
export class BestsellerDetailComponent implements OnInit {
  bestseller: List;
  title: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.bestseller = this.router.getCurrentNavigation().extras.state.bestseller;
      } else {
        console.log("navigation extras undefined");
      }
    });
  }

  ngOnInit(): void {}

  returnToList(): void {
    this.location.back();
  }
}

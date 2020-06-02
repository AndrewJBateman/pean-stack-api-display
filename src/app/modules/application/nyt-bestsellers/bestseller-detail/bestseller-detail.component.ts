import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Book, List } from "../../../../models/nyt";
import { Location } from '@angular/common';

@Component({
  selector: "app-bestseller-detail",
  templateUrl: "./bestseller-detail.component.html",
  styleUrls: ["./bestseller-detail.component.css"],
})
export class BestsellerDetailComponent implements OnInit {
  bestseller: List;
  title: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.bestseller = this.router.getCurrentNavigation().extras.state.bestseller;
        console.log('this.bestseller: ', this.bestseller);
      } else {
        console.log("navigation extras undefined");
      }
    });
  }

  ngOnInit(): void {

  }

  returnToList() {
    // this.router.getCurrentNavigation().extras.state.bestseller = {}
    // this.router.navigate(['/nyt-bestsellers'], {queryParams: {clearHistory: true, replaceUrl: true }});
    // this.router.navigate(['/nyt-bestsellers'], { replaceUrl: true });
    this.location.back();
  }

  // ngOnDestroy() {
  // }

}

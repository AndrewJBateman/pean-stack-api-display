import { Component, OnInit } from "@angular/core";

import { NytBestsellersService } from "../../../services/nyt-bestsellers.service";
import { NytApiResponse } from "../../../models/nyt";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-nyt-bestsellers",
  templateUrl: "./nyt-bestsellers.component.html",
  styleUrls: ["./nyt-bestsellers.component.css"],
})
export class NytBestsellersComponent implements OnInit {
  bestsellers: Observable<NytApiResponse>;
  clicked = false;

  constructor(private nytBestsellersService: NytBestsellersService, private router: Router) {}

  ngOnInit(): void {
    this.getBestsellers();
  }

  getBestsellers() {
    this.nytBestsellersService.getBooks().subscribe((data: any) => {
      this.bestsellers = data;
    });
  }

  onGoToBestsellerDetail(bestseller: NytApiResponse) {
    this.clicked = true;
    this.nytBestsellersService.currentBestseller = bestseller;
    this.router.navigate(['/bestseller-detail']);
  }
}

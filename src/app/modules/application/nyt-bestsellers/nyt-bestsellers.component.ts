import { Component, OnInit } from "@angular/core";

import { NytBestsellersService } from "../../../services/nyt-bestsellers.service";
import { NytApiResponse } from "../../../models/nyt";
import { Observable } from "rxjs";

@Component({
  selector: "app-nyt-bestsellers",
  templateUrl: "./nyt-bestsellers.component.html",
  styleUrls: ["./nyt-bestsellers.component.css"],
})
export class NytBestsellersComponent implements OnInit {
  bestsellers: Observable<NytApiResponse>;
  // bestsellers: any;
  clicked: boolean = false;

  constructor(private nytBestsellersService: NytBestsellersService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.nytBestsellersService.getBooks().subscribe((data: any) => {
      this.bestsellers = data;
      // data.forEach(item => {

      // })
    });
  }

  onClick(id: string) {
    this.clicked = true;
  }
}

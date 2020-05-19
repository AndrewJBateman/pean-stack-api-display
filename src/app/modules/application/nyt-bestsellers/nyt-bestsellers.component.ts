import { Component, OnInit } from "@angular/core";

import { NytBestsellersService } from "../../../services/nyt-bestsellers.service";
import { NytApiResponse } from "../../../models/nyt";
import { Observable } from 'rxjs';

@Component({
  selector: "app-nyt-bestsellers",
  templateUrl: "./nyt-bestsellers.component.html",
  styleUrls: ["./nyt-bestsellers.component.css"],
})
export class NytBestsellersComponent implements OnInit {
  mBooks: Observable<any>;

  constructor(private nytBestsellersService: NytBestsellersService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.nytBestsellersService.getBooks().subscribe((data: any) => {
      this.mBooks = data;
      console.log("Bestsellers: ", this.mBooks);
    });
  }
}

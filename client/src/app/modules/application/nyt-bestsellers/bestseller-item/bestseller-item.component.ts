import { Component, OnInit, Input } from "@angular/core";
import { Books } from "../nyt-models/nyt";

@Component({
  selector: "app-bestseller-item",
  templateUrl: "./bestseller-item.component.html",
  styleUrls: ["./bestseller-item.component.css"],
})
export class BestsellerItemComponent implements OnInit {
  @Input() bestseller: any;

  constructor() {}

  ngOnInit(): void {}
}

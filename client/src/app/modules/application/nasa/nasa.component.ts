import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Apod } from "./nasa-models/apod";
import { NasaService } from "./nasa-services/nasa.service";

@Component({
  selector: "app-nasa",
  templateUrl: "./nasa.component.html",
  styleUrls: ["./nasa.component.css"],
})
export class NasaComponent implements OnInit {
  title = "ngNasaApi";

  public nasaImgObj$: Observable<Apod>;

  constructor(private nasaApi: NasaService) {}

  ngOnInit(): void {
    this.nasaImgObj$ = this.nasaApi.getNasaImage();
  }
}

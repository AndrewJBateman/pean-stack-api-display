import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NasaService } from "../../../services/nasa.service";

@Component({
  selector: "app-nasa",
  templateUrl: "./nasa.component.html",
  styleUrls: ["./nasa.component.css"],
})
export class NasaComponent implements OnInit {
  title = "ngNasaApi";

  public nasaImgObj: any;

  constructor(private nasaApi: NasaService) {}

  ngOnInit(): any {
    this.nasaApi.getNasaImage().subscribe((response) => {
      this.nasaImgObj = response;
    });
  }
}

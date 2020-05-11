import { Component, AfterViewInit, OnInit } from "@angular/core";
import * as L from "leaflet";

import { LocationService } from "../../../services/location.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit, AfterViewInit {
  lat = "";
  lng = "";
  country = "";
  calling_code = "";
  city = "";
  ip = 0;
  location: Object;
  map: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocation().subscribe((data) => {
      console.log("location data: ", data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country_name;
      this.calling_code = data.country_calling_code;
      this.city = data.city;
      this.ip = data.ip;
    });
  }

  // Called after component's views and child views are initialised
  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap() {
    const myLocation = {
      lat: 37.7964333,
      lng: -1.5121459,
    };
    const zoomLevel = 12;
    this.map = L.map("map", {
      center: [myLocation.lat, myLocation.lng],
      zoom: zoomLevel,
    });

    const mainLayer = L.tileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        minZoom: 12,
        maxZoom: 17,
        attribution: "Open Street Map",
      }
    );

    mainLayer.addTo(this.map);
  }
}

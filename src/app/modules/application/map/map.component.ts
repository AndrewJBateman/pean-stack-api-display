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
  callingCode = "";
  city = "";
  ip = 0;
  location: object;
  map: any;

  constructor(private locationService: LocationService) {}

  ngOnInit() {}

  // Called after component's views and child views are initialised
  ngAfterViewInit(): void {
    this.locationService.getLocation().subscribe((data: any) => {
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country_name;
      this.callingCode = data.country_calling_code;
      this.city = data.city;
      this.ip = data.ip;

      // if location data returned use that, else use location of the Eiffel Tower
      const myLocation = data
        ? {
            lat: this.lat,
            lng: this.lng,
          }
        : {
            lat: 48.858222,
            lng: 2.2945,
          };
      const zoomLevel = 13;
      this.map = L.map("map", {
        center: [myLocation.lat, myLocation.lng],
        zoom: zoomLevel,
      });

      const mainLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          minZoom: 2,
          maxZoom: 17,
          tileSize: 256,
          tileOffset: -1,
          attribution: "Open Street Map",
        }
      );

      mainLayer.addTo(this.map);
    });
  }
}

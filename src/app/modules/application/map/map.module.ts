import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MapComponent } from "./map.component";
import { MapRoutingModule } from "./map-routing.module";

import * as L from 'leaflet'

@NgModule({
  imports: [CommonModule, MapRoutingModule],
  exports: [MapComponent],
  declarations: [MapComponent]
})
export class MapModule {}

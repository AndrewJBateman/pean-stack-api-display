import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NasaComponent } from "./nasa.component";
import { NasaRoutingModule } from "./nasa-routing.module";

@NgModule({
  imports: [CommonModule, NasaRoutingModule],
  exports: [NasaComponent],
  declarations: [NasaComponent]
})
export class NasaModule {}

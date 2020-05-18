import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SafePipeModule } from 'safe-pipe';

import { NasaComponent } from "./nasa.component";
import { NasaRoutingModule } from "./nasa-routing.module";

@NgModule({
  imports: [CommonModule, NasaRoutingModule, SafePipeModule, ],
  exports: [NasaComponent],
  declarations: [NasaComponent]
})
export class NasaModule {}

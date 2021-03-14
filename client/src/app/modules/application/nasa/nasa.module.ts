import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SafePipeModule } from "safe-pipe";

import { NasaComponent } from "./nasa.component";
import { NasaRoutingModule } from "./nasa-routing.module";
import { SvgCalenderModule } from './../../../components/svg-calender/svg-calender.module';
import { SvgStickyComponent } from "../../../components/svg-sticky/svg-sticky.component";
import { SvgCopyrightComponent } from './../../../components/svg-copyright/svg-copyright.component';

@NgModule({
  imports: [CommonModule, NasaRoutingModule, SafePipeModule, SvgCalenderModule],
  exports: [NasaComponent],
  declarations: [NasaComponent, SvgStickyComponent, SvgCopyrightComponent],
})
export class NasaModule {}

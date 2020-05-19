import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NytBestsellersComponent } from "./nyt-bestsellers.component";
import { NytBestsellersRoutingModule } from "./nyt-bestsellers-routing.module";

@NgModule({
  imports: [CommonModule, NytBestsellersRoutingModule],
  exports: [NytBestsellersComponent],
  declarations: [NytBestsellersComponent],
})
export class NytBestsellersModule {}

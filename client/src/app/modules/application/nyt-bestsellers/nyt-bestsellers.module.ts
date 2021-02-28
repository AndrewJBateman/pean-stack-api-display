import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NytBestsellersComponent } from "./nyt-bestsellers.component";
import { NytBestsellersRoutingModule } from "./nyt-bestsellers-routing.module";
import { BestsellerItemComponent } from "./bestseller-item/bestseller-item.component";

@NgModule({
  imports: [CommonModule, NytBestsellersRoutingModule],
  exports: [NytBestsellersComponent, BestsellerItemComponent],
  declarations: [NytBestsellersComponent, BestsellerItemComponent],
})
export class NytBestsellersModule {}

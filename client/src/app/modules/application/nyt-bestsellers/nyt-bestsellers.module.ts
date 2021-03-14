import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NytBestsellersComponent } from "./nyt-bestsellers.component";
import { NytBestsellersRoutingModule } from "./nyt-bestsellers-routing.module";
import { BestsellerItemComponent } from "./bestseller-item/bestseller-item.component";
import { SvgListModule } from "../../../components/svg-list/svg-list.module";


@NgModule({
  imports: [CommonModule, NytBestsellersRoutingModule, SvgListModule],
  exports: [NytBestsellersComponent, BestsellerItemComponent],
  declarations: [NytBestsellersComponent, BestsellerItemComponent],
})
export class NytBestsellersModule {}

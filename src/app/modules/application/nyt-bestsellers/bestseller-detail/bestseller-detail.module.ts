import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BestsellerDetailComponent } from "./bestseller-detail.component";
import { BestsellerDetailRoutingModule } from "./bestseller-detail-routing.module";

@NgModule({
  imports: [CommonModule, BestsellerDetailRoutingModule],
  exports: [BestsellerDetailComponent],
  declarations: [BestsellerDetailComponent],
})
export class BestsellerDetailModule {}

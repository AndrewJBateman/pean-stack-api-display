import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewsComponent } from "./news.component";
import { NewsRoutingModule } from "./news-routing.module";
import { PipesModule } from "../../../pipes/pipes.module";

@NgModule({
  imports: [CommonModule, NewsRoutingModule, PipesModule],
  exports: [NewsComponent],
  declarations: [NewsComponent],
})
export class NewsModule {}

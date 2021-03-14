import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NewsComponent } from "./news.component";
import { NewsRoutingModule } from "./news-routing.module";
import { PipesModule } from "../../../pipes/pipes.module";
import { SvgCalenderModule } from './../../../components/svg-calender/svg-calender.module';
import { SvgLinkComponent } from './../../../components/svg-link/svg-link.component';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, PipesModule, SvgCalenderModule],
  exports: [NewsComponent],
  declarations: [NewsComponent, SvgLinkComponent],
})
export class NewsModule {}

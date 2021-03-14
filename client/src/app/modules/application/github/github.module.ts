import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { GithubComponent } from "./github.component";
import { GithubRoutingModule } from "./github-routing.module";
import { GithubUserComponent } from "./github-user/github-user.component";
import { PipesModule } from "../../../pipes/pipes.module";
import { SvgGlobeComponent } from './../../../components/svg-globe/svg-globe.component';
import { SvgListModule } from './../../../components/svg-list/svg-list.module';

import { GithubService } from "../../../services/github.service";

@NgModule({
  imports: [CommonModule, GithubRoutingModule, FormsModule, PipesModule, SvgListModule],
  exports: [GithubComponent],
  declarations: [GithubComponent, GithubUserComponent, SvgGlobeComponent],
  providers: [GithubService],
})
export class GithubModule {}

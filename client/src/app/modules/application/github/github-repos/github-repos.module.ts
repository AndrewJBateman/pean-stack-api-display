import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GithubReposComponent } from "./github-repos.component";
import { GithubReposRoutingModule } from "./github-repos-routing.module";
import { PipesModule } from "../../../../pipes/pipes.module";
import { SvgGithubModule } from "../../../../components/svg-github/svg-github.module";

@NgModule({
  imports: [
    CommonModule,
    GithubReposRoutingModule,
    PipesModule,
    SvgGithubModule,
  ],
  exports: [GithubReposComponent],
  declarations: [GithubReposComponent],
  providers: [],
})
export class GithubReposModule {}

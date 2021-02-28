import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GithubReposComponent } from "./github-repos.component";
import { GithubReposRoutingModule } from "./github-repos-routing.module";
import { GithubService } from "../../../../services/github.service";
import { PipesModule } from "../../../../pipes/pipes.module";

@NgModule({
  imports: [CommonModule, GithubReposRoutingModule, PipesModule],
  exports: [GithubReposComponent],
  declarations: [GithubReposComponent],
  providers: [GithubService]
})
export class GithubReposModule {}

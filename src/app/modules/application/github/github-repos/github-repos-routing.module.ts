import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GithubReposComponent } from "./github-repos.component";

const routes: Routes = [{ path: "", component: GithubReposComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubReposRoutingModule {}

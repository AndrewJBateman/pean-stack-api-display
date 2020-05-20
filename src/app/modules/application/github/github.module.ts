import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GithubComponent } from "./github.component";
import { GithubRoutingModule } from "./github-routing.module";
import { GithubService } from "../../../services/github.service";

@NgModule({
  imports: [CommonModule, GithubRoutingModule],
  exports: [GithubComponent],
  declarations: [GithubComponent],
  providers: [GithubService],
})
export class GithubModule {}

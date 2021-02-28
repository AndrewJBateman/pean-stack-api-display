import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { GithubComponent } from "./github.component";
import { GithubRoutingModule } from "./github-routing.module";
import { GithubUserComponent } from "./github-user/github-user.component";
import { PipesModule } from "../../../pipes/pipes.module";

import { GithubService } from "../../../services/github.service";

@NgModule({
  imports: [CommonModule, GithubRoutingModule, FormsModule, PipesModule],
  exports: [GithubComponent],
  declarations: [GithubComponent, GithubUserComponent],
  providers: [GithubService],
})
export class GithubModule {}

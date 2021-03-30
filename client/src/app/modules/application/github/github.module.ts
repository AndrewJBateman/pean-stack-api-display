import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { GithubComponent } from "./github.component";
import { GithubRoutingModule } from "./github-routing.module";
import { GithubUserComponent } from "./github-user/github-user.component";
import { PipesModule } from "../../../pipes/pipes.module";
import { SvgGlobeModule } from "./../../../components/svg-globe/svg-globe.module";
import { SvgPenComponent } from "./../../../components/svg-pen/svg-pen.component";
import { SvgUserComponent } from "./../../../components/svg-user/svg-user.component";
import { SvgPersonModule } from "./../../../components/svg-person/svg-person.module";
import { SvgFolderModule } from "./../../../components/svg-folder/svg-folder.module";

import { GithubService } from "../../../services/github.service";

@NgModule({
  imports: [CommonModule, GithubRoutingModule, FormsModule, PipesModule, SvgFolderModule, SvgPersonModule, SvgGlobeModule],
  exports: [GithubComponent],
  declarations: [
    GithubComponent,
    GithubUserComponent,
    SvgPenComponent,
    SvgUserComponent
  ],
  providers: [GithubService],
})
export class GithubModule {}

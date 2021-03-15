import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { GithubComponent } from "./github.component";
import { GithubRoutingModule } from "./github-routing.module";
import { GithubUserComponent } from "./github-user/github-user.component";
import { PipesModule } from "../../../pipes/pipes.module";
import { SvgGlobeComponent } from "./../../../components/svg-globe/svg-globe.component";
import { SvgPenComponent } from "./../../../components/svg-pen/svg-pen.component";
import { SvgUserComponent } from "./../../../components/svg-user/svg-user.component";
import { SvgPersonComponent } from "./../../../components/svg-person/svg-person.component";
import { SvgFolderComponent } from "./../../../components/svg-folder/svg-folder.component";

import { GithubService } from "../../../services/github.service";

@NgModule({
  imports: [CommonModule, GithubRoutingModule, FormsModule, PipesModule],
  exports: [GithubComponent],
  declarations: [
    GithubComponent,
    GithubUserComponent,
    SvgGlobeComponent,
    SvgPenComponent,
    SvgUserComponent,
    SvgPersonComponent,
    SvgFolderComponent,
  ],
  providers: [GithubService],
})
export class GithubModule {}

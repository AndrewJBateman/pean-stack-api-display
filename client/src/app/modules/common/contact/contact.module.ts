import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact-routing.module";

import { SvgFolderModule } from "./../../../components/svg-folder/svg-folder.module";
import { SvgPersonModule } from "./../../../components/svg-person/svg-person.module";
import { SvgGlobeModule } from "./../../../components/svg-globe/svg-globe.module";

@NgModule({
  imports: [CommonModule, ContactRoutingModule, SvgFolderModule, SvgPersonModule, SvgGlobeModule],
  exports: [ContactComponent],
  declarations: [ContactComponent],
  providers: [],
})
export class ContactModule {}

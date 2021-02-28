import { NgModule } from "@angular/core";
import {
  ServerModule,
  ServerTransferStateModule,
} from "@angular/platform-server";
import { BrowserModule } from "@angular/platform-browser";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: "pern-stack-api-display" }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

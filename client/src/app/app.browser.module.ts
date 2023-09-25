import { NgModule } from "@angular/core";
import {
  BrowserModule,
} from "@angular/platform-browser";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
  imports: [
    AppModule,
    BrowserModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {}

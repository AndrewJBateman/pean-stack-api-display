import { Breakpoints } from "@angular/cdk/layout";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CLOUDINARY_CONFIG, NgxPictureModule } from "ngx-picture";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/common/home/home.component";
import { NotFoundComponent } from "./modules/common/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./modules/common/navbar/navbar.component";
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    FormsModule,
    NgxPictureModule.forRoot(CLOUDINARY_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/common/home/home.component";
import { NotFoundComponent } from "./modules/common/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./modules/common/navbar/navbar.component";
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
   ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, PipesModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

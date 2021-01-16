import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/common/home/home.component";
import { NotFoundComponent } from "./modules/common/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "nasa",
    loadChildren: () =>
      import("./modules/application/nasa/nasa.module").then(
        (mod) => mod.NasaModule
      ),
  },
  {
    path: "crypto",
    loadChildren: () =>
      import("./modules/application/crypto/crypto.module").then(
        (mod) => mod.CryptoModule
      ),
  },
  {
    path: "map",
    loadChildren: () =>
      import("./modules/application/map/map.module").then(
        (mod) => mod.MapModule
      ),
  },
  {
    path: "news",
    loadChildren: () =>
      import("./modules/application/news/news.module").then(
        (mod) => mod.NewsModule
      ),
  },
  {
    path: "google-charts",
    loadChildren: () =>
      import("./modules/application/google-chart/google-chart.module").then(
        (mod) => mod.GoogleChartModule
      ),
  },
  {
    path: "books",
    loadChildren: () =>
      import("./modules/application/books/books.module").then(
        (mod) => mod.BooksModule
      ),
  },
  {
    path: "book-detail",
    loadChildren: () =>
      import("./modules/application/books/book-detail/book-detail.module").then(
        (mod) => mod.BookDetailModule
      ),
  },
  {
    path: "nyt-bestsellers",
    loadChildren: () =>
      import(
        "./modules/application/nyt-bestsellers/nyt-bestsellers.module"
      ).then((mod) => mod.NytBestsellersModule),
  },
  {
    path: "bestseller-detail",
    loadChildren: () =>
      import(
        "./modules/application/nyt-bestsellers/bestseller-detail/bestseller-detail.module"
      ).then((mod) => mod.BestsellerDetailModule),
  },
  {
    path: "github",
    loadChildren: () =>
      import("./modules/application/github/github.module").then(
        (mod) => mod.GithubModule
      ),
  },
  {
    path: "github-repos/:username",
    loadChildren: () =>
      import(
        "./modules/application/github/github-repos/github-repos.module"
      ).then((mod) => mod.GithubReposModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./modules/common/about/about.module").then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/common/contact/contact.module").then(
        (mod) => mod.ContactModule
      ),
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./modules/common/signin/signin.module").then(
        (mod) => mod.SigninModule
      ),
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

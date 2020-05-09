import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'nasa',
    loadChildren: () => import('./modules/application/nasa/nasa.module')
      .then(mod => mod.NasaModule)
  },
  {
    path: 'crypto',
    loadChildren: () => import('./modules/application/crypto/crypto.module')
      .then(mod => mod.CryptoModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./modules/application/map/map.module')
      .then(mod => mod.MapModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/application/news/news.module')
      .then(mod => mod.NewsModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./modules/application/data/data.module')
      .then(mod => mod.DataModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'items',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./modules/application/films/films.module')
      .then(mod => mod.FilmsModule)
  },
  {
    path: 'nasa',
    loadChildren: () => import('./modules/application/nasa/nasa.module')
      .then(mod => mod.NasaModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/services/services.module')
      .then(mod => mod.ServicesModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/components/components.module')
      .then(mod => mod.ComponentsModule)
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

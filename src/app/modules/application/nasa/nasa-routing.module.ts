import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NasaComponent } from './nasa.component';

const routes: Routes = [
  { path: '', component: NasaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaRoutingModule { }


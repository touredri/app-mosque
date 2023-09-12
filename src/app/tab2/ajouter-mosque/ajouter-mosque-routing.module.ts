import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterMosquePage } from './ajouter-mosque.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterMosquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterMosquePageRoutingModule {}

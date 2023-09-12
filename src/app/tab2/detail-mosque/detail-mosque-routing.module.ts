import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMosquePage } from './detail-mosque.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMosquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMosquePageRoutingModule {}

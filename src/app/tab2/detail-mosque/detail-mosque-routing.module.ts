import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMosquePage } from './detail-mosque.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMosquePage
  },
  {
    path: 'editer-mosque',
    loadChildren: () => import('./editer-mosque/editer-mosque.module').then( m => m.EditerMosquePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMosquePageRoutingModule {}

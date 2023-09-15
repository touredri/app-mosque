import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailMosquePage } from './detail-mosque.page';
import { MapPage } from './map/map.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMosquePage
  },
  {
    path: 'editer-mosque/:id',
    loadChildren: () => import('./editer-mosque/editer-mosque.module').then( m => m.EditerMosquePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMosquePageRoutingModule {}

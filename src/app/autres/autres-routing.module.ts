import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutresPage } from './autres.page';

const routes: Routes = [
  {
    path: '',
    component: AutresPage
  },
  {
    path: 'coran',
    loadChildren: () => import('./coran/coran.module').then( m => m.CoranPageModule)
  },
  {
    path: 'preches',
    loadChildren: () => import('./preches/preches.module').then( m => m.PrechesPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then( m => m.RadioPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutresPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrechesPage } from './preches.page';

const routes: Routes = [
  {
    path: '',
    component: PrechesPage
  },
  {
    path: 'modifier-preche',
    loadChildren: () => import('./modifier-preche/modifier-preche.module').then( m => m.ModifierPrechePageModule)
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrechesPageRoutingModule {}

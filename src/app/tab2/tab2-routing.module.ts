import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'ajouter-mosque',
    loadChildren: () => import('./ajouter-mosque/ajouter-mosque.module').then( m => m.AjouterMosquePageModule)
  },
  {
    path: 'detail-mosque',
    loadChildren: () => import('./detail-mosque/detail-mosque.module').then( m => m.DetailMosquePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

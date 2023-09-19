import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifierPrechePage } from './modifier-preche.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierPrechePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierPrechePageRoutingModule {}

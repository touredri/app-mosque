import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouratePage } from './sourate.page';

const routes: Routes = [
  {
    path: '',
    component: SouratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouratePageRoutingModule {}

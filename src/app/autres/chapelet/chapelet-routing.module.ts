import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapeletPage } from './chapelet.page';

const routes: Routes = [
  {
    path: '',
    component: ChapeletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChapeletPageRoutingModule {}

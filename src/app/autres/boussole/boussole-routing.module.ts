import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoussolePage } from './boussole.page';

const routes: Routes = [
  {
    path: '',
    component: BoussolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoussolePageRoutingModule {}

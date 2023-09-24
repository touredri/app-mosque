import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifRadioPage } from './modif-radio.page';

const routes: Routes = [
  {
    path: '',
    component: ModifRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifRadioPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditerMosquePage } from './editer-mosque.page';

const routes: Routes = [
  {
    path: '',
    component: EditerMosquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditerMosquePageRoutingModule {}

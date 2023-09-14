import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPopupRadioPage } from './modal-popup-radio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPopupRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPopupRadioPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioPage } from './radio.page';
import { ModifRadioPage } from './modif-radio/modif-radio.page';
import { ModalPopupRadioPage } from './modal-popup-radio/modal-popup-radio.page';

const routes: Routes = [
  {
    path: '',
    component: RadioPage
  },
  {
    path: 'update/:id',
    component: ModifRadioPage
  },
  {
    path: 'creer',
    component: ModalPopupRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioPageRoutingModule {}

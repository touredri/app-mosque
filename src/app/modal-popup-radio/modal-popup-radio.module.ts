import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPopupRadioPageRoutingModule } from './modal-popup-radio-routing.module';

import { ModalPopupRadioPage } from './modal-popup-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPopupRadioPageRoutingModule
  ],
  declarations: [ModalPopupRadioPage]
})
export class ModalPopupRadioPageModule {}

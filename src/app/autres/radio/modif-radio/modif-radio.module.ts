import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifRadioPageRoutingModule } from './modif-radio-routing.module';

import { ModifRadioPage } from './modif-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifRadioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModifRadioPage]
})
export class ModifRadioPageModule {}

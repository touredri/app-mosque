import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadioPageRoutingModule } from './radio-routing.module';

import { RadioPage } from './radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RadioPage]
})
export class RadioPageModule {}

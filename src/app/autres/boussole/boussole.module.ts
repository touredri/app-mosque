import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoussolePageRoutingModule } from './boussole-routing.module';

import { BoussolePage } from './boussole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoussolePageRoutingModule
  ],
  declarations: [BoussolePage]
})
export class BoussolePageModule {}

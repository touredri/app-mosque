import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrechesPageRoutingModule } from './preches-routing.module';

import { PrechesPage } from './preches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrechesPageRoutingModule
  ],
  declarations: [PrechesPage]
})
export class PrechesPageModule {}

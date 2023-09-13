import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouratePageRoutingModule } from './sourate-routing.module';

import { SouratePage } from './sourate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouratePageRoutingModule
  ],
  declarations: [SouratePage]
})
export class SouratePageModule {}

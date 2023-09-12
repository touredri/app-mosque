import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoranPageRoutingModule } from './coran-routing.module';

import { CoranPage } from './coran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoranPageRoutingModule
  ],
  declarations: [CoranPage]
})
export class CoranPageModule {}

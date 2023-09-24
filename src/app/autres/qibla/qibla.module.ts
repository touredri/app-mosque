import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Qibla } from './qibla.page';


import { QiblaModuleRoutingModule } from './qibla-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QiblaModuleRoutingModule
  ],
  declarations: [Qibla]
})
export class QiblaModule {}

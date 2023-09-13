import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterMosquePageRoutingModule } from './ajouter-mosque-routing.module';

import { AjouterMosquePage } from './ajouter-mosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterMosquePageRoutingModule
  ],
  declarations: [AjouterMosquePage]
})
export class AjouterMosquePageModule {}

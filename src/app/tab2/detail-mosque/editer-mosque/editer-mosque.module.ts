import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditerMosquePageRoutingModule } from './editer-mosque-routing.module';
import { EditerMosquePage } from './editer-mosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditerMosquePageRoutingModule
  ],
  declarations: [EditerMosquePage]
})
export class EditerMosquePageModule {}

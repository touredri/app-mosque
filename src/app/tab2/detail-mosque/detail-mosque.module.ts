import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailMosquePageRoutingModule } from './detail-mosque-routing.module';
import { DetailMosquePage } from './detail-mosque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMosquePageRoutingModule
  ],
  declarations: [DetailMosquePage]
})
export class DetailMosquePageModule {}

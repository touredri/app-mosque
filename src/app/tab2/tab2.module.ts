import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { HeaderComponent } from 'header/header.component';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { MosqueComponent } from './mosque_content/mosque_content.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    MosqueComponent,
    HeaderComponent,
    FormsModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

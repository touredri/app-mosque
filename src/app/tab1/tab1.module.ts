import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HeaderComponent } from 'header/header.component';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";
 import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    HeaderComponent,
    IgxCarouselModule,
	  IgxSliderModule,
  ],
  declarations: [Tab1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1PageModule {}

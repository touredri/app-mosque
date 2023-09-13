import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AcceuilComponent } from './acceuil_content/acceuil.component';
import { HeaderComponent } from 'header/header.component';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { 
	IgxCarouselModule,
	IgxSliderModule
 } from "igniteui-angular";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    AcceuilComponent,
    HeaderComponent,
    IgxCarouselModule,
	  IgxSliderModule
   
  ],
  declarations: [Tab1Page,],
})
export class Tab1PageModule {}

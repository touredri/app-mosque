import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { HijriCalendarComponent } from '../hijri-calendar/hijri-calendar.component';
import { HeaderComponent } from 'header/header.component';

import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    HijriCalendarComponent,
    HeaderComponent
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}

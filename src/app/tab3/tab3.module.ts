
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { HeaderComponent } from 'header/header.component';

import { Tab3PageRoutingModule } from './tab3-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
<<<<<<< HEAD
    HijriCalendarComponent,
    HeaderComponent,
   
=======
    HeaderComponent
>>>>>>> 309ea39b0be96ef7eaddcba7cdb657a564869b20
  ],
  declarations: [Tab3Page,]
})
export class Tab3PageModule {}

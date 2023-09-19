import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendrierPageRoutingModule } from './calendrier-routing.module';
import { CalendrierPage } from './calendrier.page';
import { MatNativeDateModule} from '@angular/material/core'
import { MatDatepickerModule} from '@angular/material/datepicker'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CalendrierPageRoutingModule,  
  ],
  providers: [],
  declarations: [CalendrierPage]
})
export class CalendrierPageModule {}

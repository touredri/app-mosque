import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxAngularMaterialHijriAdapterModule } from 'ngx-angular-material-hijri-adapter';

import { CalendrierPageRoutingModule } from './calendrier-routing.module';

import { CalendrierPage } from './calendrier.page';
import { MOMENT_HIJRI_DATE_FORMATS } from 'ngx-angular-material-hijri-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatNativeDateModule} from '@angular/material/core'
import { MatDatepickerModule} from '@angular/material/datepicker'
import { NgxAngularMaterialHijriAdapterService } from 'ngx-angular-material-hijri-adapter';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxAngularMaterialHijriAdapterModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CalendrierPageRoutingModule,
    
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: NgxAngularMaterialHijriAdapterService,
    },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_HIJRI_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: "fr" },
],
  declarations: [CalendrierPage]
})
export class CalendrierPageModule {}

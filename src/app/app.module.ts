import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { NgxAngularMaterialHijriAdapterService, DateLocaleKeys, MOMENT_HIJRI_DATE_FORMATS } from 'ngx-angular-material-hijri-adapter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HammerModule,
    BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  {
    provide: DateAdapter,
    useClass: NgxAngularMaterialHijriAdapterService,
  },
  // Change the format by using `MOMENT_HIJRI_DATE_FORMATS` for Dates and `MOMENT_HIJRI_DATE_TIME_FORMATS` for date/time.
  { provide: MAT_DATE_FORMATS, useValue: MOMENT_HIJRI_DATE_FORMATS },
  // Change the localization to arabic by using `AR_SA` not `AR` only and `EN_US` not `EN` only.
  { provide: MAT_DATE_LOCALE, useValue: DateLocaleKeys.AR_SA },],
  bootstrap: [AppComponent],
})
export class AppModule {
}

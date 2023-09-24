import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'header/header.component';

import { IonicModule } from '@ionic/angular';

import { AutresPageRoutingModule } from './autres-routing.module';

import { AutresPage } from './autres.page';
import { BoussoleService } from '../service/boussole.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutresPageRoutingModule,
    HeaderComponent,
    ReactiveFormsModule
  ],
  declarations: [AutresPage]
})
export class AutresPageModule {}

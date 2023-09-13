import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierPrechePageRoutingModule } from './modifier-preche-routing.module';

import { ModifierPrechePage } from './modifier-preche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierPrechePageRoutingModule
  ],
  declarations: [ModifierPrechePage]
})
export class ModifierPrechePageModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Qibla } from './qibla.page';

const routes: Routes = [
  {
    path: '',
    component: Qibla,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QiblaModuleRoutingModule {}

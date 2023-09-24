import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'splash',
    pathMatch:'full'
  },
  
  {
    path:'',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-up/:id',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modal-popup-radio',
    loadChildren: () => import('./autres/radio/modal-popup-radio/modal-popup-radio.module').then( m => m.ModalPopupRadioPageModule)
  },
  {
    path: 'annonce',
    loadChildren: () => import('./annonce/annonce.module').then( m => m.AnnoncePageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'chapelet',
    loadChildren: () => import('./autres/chapelet/chapelet.module').then( m => m.ChapeletPageModule)
  },
  {
    path: 'boussole',
    loadChildren: () => import('./autres/boussole/boussole.module').then( m => m.BoussolePageModule)
  },
  {
    path: 'modif-radio',
    loadChildren: () => import('./autres/radio/modif-radio/modif-radio.module').then( m => m.ModifRadioPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./autres/radio/radio.module').then( m => m.RadioPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

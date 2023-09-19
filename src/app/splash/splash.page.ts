import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private platform: Platform, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      
      this.router.navigate(['/login']);
    }, 3000);

    this.platform.backButton.subscribeWithPriority(10, () => {
      App.exitApp();
 });
  }
}

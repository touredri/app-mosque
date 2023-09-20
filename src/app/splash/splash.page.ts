import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    private platform: Platform,
    private router: Router,
    private localStorage: Storage
  ) { }

  async ngOnInit() {
    const user = JSON.parse(await this.localStorage.get('user'));
    
      if (user) {
        this.router.navigate(['tabs/tab1']);
      }
      else {
        setTimeout(() => {
        this.router.navigateByUrl('/login');
        }, 3000);
      }
    this.platform.backButton.subscribeWithPriority(10, () => {
      App.exitApp();
 });
  }
}

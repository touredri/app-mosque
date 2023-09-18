import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router, private localStorage: Storage) { }

  async ngOnInit() {
    const user = JSON.parse(await this.localStorage.get('user'));
    setTimeout(() => {
      if (user) {
        this.router.navigate(['tabs/tab1']);
      }
      else {
        this.router.navigateByUrl('/login');
      }
    }, 3000);
  }

}

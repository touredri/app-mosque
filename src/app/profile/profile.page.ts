import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  isConnect: boolean;
  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private localStorage: Storage,
    private router: Router
  ) { }

  async ngOnInit() {
    this.localStorage.create();
    this.user = JSON.parse(await this.localStorage.get('user'));
    this.authService.getUser()
  }

  async onLogout() {
    this.localStorage.remove('user');
    this.authService.setIsLoggedIn(false);
    await this.afAuth.signOut();
    this.router.navigate(['login'])
  }
}

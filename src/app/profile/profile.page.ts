import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.isConnect = this.authService.getIsLoggedIn();
    if(this.user) {
      console.log(this.user);
    }
  }

  async onLogout() {
    this.authService.setIsLoggedIn(false);
    await this.afAuth.signOut();
  }

}

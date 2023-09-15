import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  isConnect: boolean;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.isConnect = this.authService.getIsLoggedIn();
    console.log(this.user.uid)
  }
  onLogout() {
    this.authService.setIsLoggedIn(false);
  }
}

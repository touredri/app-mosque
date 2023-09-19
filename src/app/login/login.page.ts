import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    email: '',
    password: '',
  };

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
    ) {}

  async login() {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );

      if (result.user) {
        console.log('Utilisateur connecté avec succès:', result.user);
        this.router.navigate(['/tabs/tab1']);
        this.authService.setIsLoggedIn(true);
        this.authService.setUser(result.user);
        this.user = {
          email: '',
          password: '',
        };
      }
      document.getElementById('error')?.classList.add('hidden');
    } catch (error) {
      console.error('Erreur lors de la connexion de l\'utilisateur :', error);
      document.getElementById('error')?.classList.remove('hidden');
    }
  }
  onPasser() {
    this.authService.setIsLoggedIn(false);
  }
  ngOnInit() {
  }

}

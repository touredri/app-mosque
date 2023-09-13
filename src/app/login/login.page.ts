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
        // La connexion s'est bien passée
        console.log('Utilisateur connecté avec succès:', result.user);

        // Redirigez l'utilisateur vers la page d'accueil ou une autre page privée
        this.router.navigate(['/tabs/tab1']);

        // garder la session
        this.authService.setIsLoggedIn(true);

        // Effacez les champs du formulaire après la connexion
        this.user = {
          email: '',
          password: '',
        };
      }
    } catch (error) {
      console.error('Erreur lors de la connexion de l\'utilisateur :', error);
    }
  }
  ngOnInit() {
  }

}

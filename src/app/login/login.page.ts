import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FirestoreService } from '../service/firestore.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  currentUser: any;
  user = {
    email: '',
    password: '',
  };

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    private firestore: FirestoreService,
    private localStorage: Storage,
    ) {}

  async login() {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );

      if (result.user) {
        // La connexion s'est bien passée
        const uid = result.user.uid;
        this.firestore.getUserById(uid).subscribe((data) => {
        this.localStorage.set("user", JSON.stringify(data));
        });

        // Redirigez l'utilisateur vers la page d'accueil ou une autre page privée
        this.router.navigate(['/tabs/tab1']);

        // Effacez les champs du formulaire après la connexion
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
    const user = {
      nom: 'unknow',
      email: 'none',
      admin: false,
      prenom: 'unknow'
    }
    this.localStorage.set('user', JSON.stringify(user))
  }

  onGoogleSignIn() {
    this.authService.signInWithGoogle();
  }

   ngOnInit() {
    this.localStorage.create();
    
  }
}

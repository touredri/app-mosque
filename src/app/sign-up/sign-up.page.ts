import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  errorMessage: any
  ngOnInit() {
  }
  user = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    admin: false,
  };

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  async register() {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );

      if (result.user) {
        // L'enregistrement s'est bien passé
        const isAdmin = this.route.snapshot.paramMap.get('id');
        if (isAdmin) {
          this.user.admin = true
        }
        // Récupérez l'UID de l'utilisateur
        const uid = result.user.uid;

        // Envoyer un e-mail de vérification à l'utilisateur
        await result.user.sendEmailVerification();

        // Enregistrez également le nom et le prénom dans Firestore
        this.firestore.collection('utilisateurs').doc(uid).set({
          nom: this.user.nom,
          prenom: this.user.prenom,
          email: this.user.email,
          admin: this.user.admin,
        });

        // Effacez les champs du formulaire après l'enregistrement
        this.user = {
          nom: '',
          prenom: '',
          email: '',
          password: '',
          admin: false,
        };

        document.getElementById('pop-up')?.classList.remove('hidden')
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
      this.errorMessage = "Erreur lors de l\'enregistrement de l\'utilisateur :" + error;
    }
  }
}

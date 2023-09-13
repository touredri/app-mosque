import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

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
    private router: Router
  ) {}

  async register() {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );

      if (result.user) {
        // L'enregistrement s'est bien passé
        console.log('Utilisateur enregistré avec succès:', result.user);

        // Enregistrez également le nom et le prénom dans Firestore
        this.firestore.collection('utilisateurs').add({
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

        // Redirigez l'utilisateur vers la page de connexion
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
    }
  }
}
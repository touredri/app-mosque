import { Injectable } from '@angular/core';
import { Mosque } from '../models/mosque.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, map } from 'rxjs';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, FirestoreSettings } from 'firebase/firestore';
import { initializeApp, FirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestoreApp: FirebaseApp;
  
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    ) {}

    async init() {
      const app = initializeApp(environment.firebaseConfig);
      initializeFirestore(app, {
        localCache:
          persistentLocalCache({tabManager: persistentMultipleTabManager()}),
        experimentalForceLongPolling: true,
      });
    }
            
  // Créer une mosquée
  ajouterMosquee(mosquee: Mosque, image: File) {
    // Télécharger l'image dans Firebase Storage et récupérer le chemin
    const imageRef = this.storage.ref(`mosquees/${mosquee.info.nom}_${image.name}`);
    const uploadTask = this.storage.upload(`mosquees/${mosquee.info.nom}_${image.name}`, image);

    uploadTask.snapshotChanges().subscribe(() => {
      imageRef.getDownloadURL().subscribe((imageUrl) => {
        // Une fois l'image téléchargée, ajoutez la mosquée avec le chemin de l'image
        mosquee.image = imageUrl;
        this.firestore.collection('mosquees').add(mosquee);
      });
    });
  }

  // Récupérer toutes les mosquées
  getMosquees():Observable<any[]>{
    return this.firestore.collection('mosquees').valueChanges();
  }
  
  getMosqueeById(id: string) {
    this.firestore
    .collection('mosquees', (ref) => ref.where('info.id', '==', parseInt(id, 10)))
    .valueChanges()
    .subscribe((mosquess: any) => {
      if (mosquess.length > 0) {
        // Si des documents correspondent, prenez le premier
        return mosquess[0];
        // console.log(this.mosques.info.nom)
      } 
      });  }

  // Mettre à jour une mosquée
  mettreAJourMosquee(id: string, mosquee: Mosque, nouvelleImage: File) {
    // Vérifiez si une nouvelle image a été fournie
    if (nouvelleImage) {
      // Supprimez l'ancienne image
      const ancienneImageRef = this.storage.ref(`mosquees/${mosquee.info.nom}_${nouvelleImage.name}`);
      ancienneImageRef.delete();

      // Téléchargez la nouvelle image dans Firebase Storage
      const nouvelleImageRef = this.storage.ref(`mosquees/${mosquee.info.nom}_${nouvelleImage.name}`);
      const uploadTask = nouvelleImageRef.put(nouvelleImage);

      uploadTask.snapshotChanges().subscribe(() => {
        nouvelleImageRef.getDownloadURL().subscribe((imageUrl) => {
          // Une fois la nouvelle image téléchargée, mettez à jour la mosquée avec le nouveau chemin de l'image
          mosquee.image = imageUrl;
          this.firestore.collection('mosquees').doc(id).update(mosquee);
        });
      });
    } else {
      // S'il n'y a pas de nouvelle image, mettez simplement à jour les données de la mosquée
      this.firestore.collection('mosquees').doc(id).update(mosquee);
    }
  }

  // Supprimer une mosquée
  supprimerMosquee(id: string) {
    // Récupérez d'abord le chemin de l'image pour la supprimer de Firebase Storage
    this.firestore.collection('mosquees').doc(id).valueChanges().subscribe((mosquee) => {
      if (mosquee && (mosquee as Mosque).image) {
        const imageRef = this.storage.refFromURL((mosquee as Mosque).image);
        imageRef.delete();
      }
    });
  
    // Ensuite, supprimez la mosquée de Firestore
    this.firestore.collection('mosquees').doc(id).delete();
  }

  getUserById(id: string): Observable<any> {
    return this.firestore.collection('utilisateurs').doc(id).valueChanges().pipe(
      map((userData) => {
        return userData;
      })
    );
  }
}

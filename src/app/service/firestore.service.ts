import { Injectable } from '@angular/core';
import { Mosque } from '../models/mosque.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Storage } from '@ionic/storage';
import { ImageService } from './image.service';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private save: Storage,
    private imageService: ImageService
    ) {}

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
  getMosquees() {
    return this.firestore.collection('mosquees').snapshotChanges();
  }

  async getAndSaveMosqueesLocally() {
    // Utilisez toPromise() pour attendre la résolution de l'Observable en une promesse
    const firestoreMosquees = await firstValueFrom(
      this.firestore.collection('mosquees').valueChanges()
    ) as Mosque[];

    // Parcourez les données pour télécharger les images et mettre à jour les URLs
    for (const mosque of firestoreMosquees) {
      const imageUrl = mosque.image; // Obtenez l'URL distant de l'image
      const localFileName = `mosque_image_${mosque.info.nom}.jpg`; // Générez un nom de fichier local unique

      // Téléchargez l'image et enregistrez-la localement
      await this.imageService.downloadAndSaveImageLocally(imageUrl, localFileName);

      // Mettez à jour l'URL de l'image dans les données locales
      mosque.image = localFileName;
    }

    // Enregistrez les données en local sous forme de chaîne JSON
    await this.save.set('mosquees', JSON.stringify(firestoreMosquees));
  }
  // Récupérer une mosquée par ID
  getMosqueeById(id: string) {
    return this.firestore.collection('mosquees').doc(id).valueChanges();
  }

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
}
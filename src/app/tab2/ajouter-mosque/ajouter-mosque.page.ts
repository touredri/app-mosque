import { Component, OnInit } from '@angular/core';
import { Mosque } from 'src/app/models/mosque.model';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-ajouter-mosque',
  templateUrl: './ajouter-mosque.page.html',
  styleUrls: ['./ajouter-mosque.page.scss'],
})
export class AjouterMosquePage implements OnInit {

  nom: string;
  imam: string;
  numero: string;
  quartier: string;
  latitude: number;
  longitude: number;
  lundi: string;
  mardi: string;
  mercredi: string;
  jeudi: string;
  vendredi: string;
  samedi: string;
  dimanche: string;
  fadjr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  djuma: string;
  id: number;

  constructor(private firestoreService: FirestoreService) {}

  ajoutMosque() {
    if (!this.selectedImage) {
      console.error("Aucune image sélectionnée.");
    };
    this.firestoreService.getMosquees().subscribe((data) => {
      this.id = data.length + 1
    })
    // Créez un objet Mosque avec les données du formulaire
    const nouvelleMosque: Mosque = {
      info: {
        id: this.id,
        nom: this.nom,
        quartier: this.quartier,
        imam: this.imam,
        numero: this.numero,
      },
      localisation: {
        latitude: this.latitude,
        longitude: this.longitude,
      },
      prieres: {
        fadjr: this.fadjr,
        dhuhr: this.dhuhr,
        asr: this.asr,
        maghrib: this.maghrib,
        isha: this.isha,
        djuma: this.djuma,
      },
      tabsir: {
        lundi: this.lundi,
        mardi: this.mardi,
        mercredi: this.mercredi,
        jeudi: this.jeudi,
        vendredi: this.vendredi,
        samedi: this.samedi,
        dimanche: this.dimanche,
      },
      image: '',
    };

    // Appel du service Firestore pour ajouter la nouvelle mosquée
    this.firestoreService.ajouterMosquee(nouvelleMosque, this.selectedImage);
    if (this.nom) {
      alert('Mosquée ajoutée');
    }

    // Réinitialisez les valeurs du formulaire après l'ajout
    this.nom = '';
    this.imam = '';
    this.numero = '';
    this.quartier = '';
    this.latitude = 0;
    this.longitude = 0;
    this.lundi = '';
    this.mardi = '';
    this.mercredi = '';
    this.jeudi = '';
    this.vendredi = '';
    this.samedi = '';
    this.dimanche = '';
  }
  
  selectedImage: File;

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  ngOnInit() {}
}

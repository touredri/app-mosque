import { Component, OnInit } from '@angular/core';
import { PriereService } from '../service/priere.service';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  priereTime: any;
  time: any;
  currentTime: any;
  data: any;
  public mosquee: any[] = [];

  imagesAnnonces: string[] = [
    '../../../assets/1.jpeg',
    '../../../assets/3.jpeg',
    '../../../assets/4.jpeg',
    '../../../assets/Mosquee_mmm.jpg',
  ];

  constructor(
    private priereService: PriereService,
    private firebase: FirestoreService
  ) { }

  ngOnInit(): void {
    // this.firebase.init();
    this.priereService.checkNetworkConnection();
    this.firebase.getMosquees().subscribe((data: any) => {
      this.data = data;
      this.mosquee = [
        {
          id: this.data[1].info.id,
          src: this.data[1].image,
          nom: this.data[1].info.nom
        },
        {
          id: this.data[3].info.id,
          src: this.data[3].image,
          nom: this.data[3].info.nom
        },
        {
          id: this.data[0].info.id,
          src: this.data[0].image,
          nom: this.data[0].info.nom
        }
      ]
    });
    // priere data part
    this.priereService.getPriereData().subscribe((data: any) => {
      this.currentTime = this.priereService.dataPrier(data.data);
      this.setCurrentTime(this.currentTime.timings)
    });
  }

  setCurrentTime(data: any) {
    // Obtenez l'heure actuelle du dispositif (au format "HH:MM")
    const heureActuelle = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    // Convertissez l'heure actuelle en minutes
    const [heuresActuelles, minutesActuelles] = heureActuelle.split(':');
    const heureActuelleEnMinutes = parseInt(heuresActuelles, 10) * 60 + parseInt(minutesActuelles, 10);
    // console.log(heuresActuelles + ' ' + heureActuelleEnMinutes);
    // Initialisez des variables pour stocker l'heure la plus proche et la différence minimale
    let heureLaPlusProche = '';
    let differenceMinimale = Number.MAX_SAFE_INTEGER;

    for (const timing in data) {
      // console.log(data[timing].split(' ')[0]);
      const heureTimings = data[timing].split(' ')[0]; // Extrait l'heure ("HH:MM") de la chaîne

      const [heuresTimings, minutesTimings] = heureTimings.split(':');
      const heureTimingsEnMinutes = parseInt(heuresTimings, 10) * 60 + parseInt(minutesTimings, 10);

      const difference = Math.abs(heureActuelleEnMinutes - heureTimingsEnMinutes);

      if (difference < differenceMinimale) {
        differenceMinimale = difference;
        heureLaPlusProche = data[timing].split(' ')[0];
        this.priereTime = heureLaPlusProche;
        this.time = timing;
      }
    }
    console.log("L'heure la plus proche est :", heureLaPlusProche);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { PriereService } from '../service/priere.service';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  priereTime: any;
  time: any;
  currentTime: any;
  data: any;
  public mosquee: any[] = [];

  imagesAnnonces: string[] = [
    '../../../assets/1.jpeg',
    '../../../assets/3.jpeg',
    '../../../assets/4.jpeg',
    '../../../assets/mosque.jpg',
  ];

  constructor(
    private priereService: PriereService,
    private firebase: FirestoreService
  ) {}

  ngOnInit(): void {
    // this.firebase.init();
    this.priereService.checkNetworkConnection();
    this.firebase.getMosquees().subscribe((data: any) => {
    this.data = data;
    this.mosquee = [
        {
          id: this.data[1].info.id,
          src: this.data[1].image,
          nom: this.data[1].info.nom  },
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
    const time = new Date().getHours();
    console.log(time);
    if(0 < time && time < 6) {
      this.priereTime = data.Fajr
    } else if (6 < time && time <= 14) {
      this.priereTime = data.Dhuhr
    } else if (14 < time && time <= 16) {
      this.priereTime = data.Asr
    } else if (16 < time && time < 19) {
      this.priereTime = data.Maghrib
    } else {
      this.priereTime = data.Isha
    }
  }
}

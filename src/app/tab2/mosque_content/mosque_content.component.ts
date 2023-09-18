import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Tab2PageRoutingModule } from '../tab2-routing.module';
import { RouterLink } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';
import { FirestoreService } from 'src/app/service/firestore.service';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-mosque-content',
  templateUrl: './mosque_content.component.html',
  styleUrls: ['./mosque_content.component.scss'],
  standalone : true,
  imports: [CommonModule, IonicModule, RouterLink]
})


export class MosqueComponent  implements OnInit {

  mosquees: any[] = [];
  user: any;
  constructor(
    private dataService: FirestoreService,
    private localStorage: Storage
    ) {}

  async ngOnInit() {
    this.localStorage.create();
    this.user = JSON.parse(await this.localStorage.get('user'));
    // Utilisez la méthode getMosquees du service pour récupérer les données
    this.dataService.getMosquees().subscribe((data) => {
      this.mosquees = data;
    });
  }
}



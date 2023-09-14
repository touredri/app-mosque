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



@Component({
  selector: 'app-mosque-content',
  templateUrl: './mosque_content.component.html',
  styleUrls: ['./mosque_content.component.scss'],
  standalone : true,
  imports: [CommonModule, IonicModule, RouterLink]
})


export class MosqueComponent  implements OnInit {

  data: any;
  listMosque: any;

  constructor(
    private firebase: FirestoreService
    ) {}

  ngOnInit(): void {
    this.data = this.firebase.getMosquees(),
    this.data.subscribe((mosque: any)=>{
      this.listMosque = mosque;
    })
    console.log(this.listMosque);
    
  }


}

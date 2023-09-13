import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Tab2PageRoutingModule } from '../tab2-routing.module';
import { RouterLink } from '@angular/router';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';



@Component({
  selector: 'app-mosque-content',
  templateUrl: './mosque_content.component.html',
  styleUrls: ['./mosque_content.component.scss'],
  standalone : true,
  imports: [CommonModule, IonicModule, RouterLink]
})


export class MosqueComponent  implements OnInit {

  map: L.Map | any;
  
  latitude!: number;
  longitude!: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.ionViewDidEnter();

     // COORDONNE DE LA MOSQUEE A RECHERCHER
  

  //   Geolocation.getCurrentPosition().then((result : any) =>{
  //     this.latitude = result.coords.latitude;
  //     this.longitude = result.coords.longitude;
  //     console.log(result.coords.latitude+''+result.coords.longitude);

  //     this.map = L.map('mapID').setView([12.64221,-7.99849],10)
  //     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     })

  //     L.Routing.control({
  //       waypoints: [
  //         L.latLng(this.latitude!, this.longitude!),
  //         L.latLng(12.6186, -8.0120)
  //       ]
  //     })
  // })
          Geolocation.getCurrentPosition().then((result : any) =>{
          this.latitude = result.coords.latitude;
          this.longitude = result.coords.longitude;
          console.log(this.longitude+'  '+this.latitude);
          });

  }

  ionViewDidEnter(){

      // mapPosition() {
      //   // Geolocation.getCurrentPosition().then((result : any) =>{
      //   //   this.latitude = result.coords.latitude;
      //   //   this.longitude = result.coords.longitude;
      //   //   console.log(this.longitude+'  '+this.latitude);
      //   //   });
      // }


    // COORDONNE DE LA MOSQUEE A RECHERCHER
    this.map = L.map('mapID').setView([this.latitude,this.longitude],40)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 
    }).addTo(this.map);
    console.log(this.latitude);
    
    L.Routing.control({
      waypoints: [
        L.latLng(this.latitude,this.longitude),       
        L.latLng(12.63441, -8.02650)
      ]
    }).addTo(this.map);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint = L.marker([12.63441, -8.02650]);
    markPoint.bindPopup('<p>Mosquee de YOUCOUBA</p>')
    this.map.addLayer(markPoint);

      
   
  }


}

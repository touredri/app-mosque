import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any;
  latitude!: number;
  longitude!: number;

  constructor() {}

  ngOnInit(): void {

    // Geolocation.getCurrentPosition().then((result : any) =>{
    // this.latitude = result.coords.latitude
    // this.longitude = result.coords.longitude
    // console.log(this.longitude+'  '+this.latitude)
     
    // });

  }
  
  ionViewDidEnter(){
    this.loadMap();
  }

  loadMap(){

    // COORDONNE DE LA MOSQUEE A RECHERCHER
    this.map = L.map('map').setView([12.6313593,-8.0273106],50)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.Routing.control({
      waypoints: [
        L.latLng(12.6313593,-8.0273106),
        L.latLng(12.6308461,-8.0274648)
      ]
    }).addTo(this.map)

    
    // AJOUTER UN MARKET A LA MOSQUEE
    const markPoint = L.marker([12.6308461,-8.0274648]);
    markPoint.bindPopup('<p>Mosquee de YOUCOUBA</p>')
    this.map.addLayer(markPoint);

    
  }

}

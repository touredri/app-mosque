import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: L.Map | undefined;

  constructor() {}

  ngOnInit(): void {
    
  }
  
  ionViewDidEnter(){

    // COORDONNE DE LA MOSQUEE A RECHERCHER
    this.map = L.map('map').setView([12.6307143, -8.0270483],30)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    
    }).addTo(this.map);

    L.Routing.control({
      waypoints: [
        L.latLng(12.6307143, -8.0270483),
        L.latLng(12.6313593,-8.0273106)
      ]
    }).addTo(this.map);

    
    // AJOUTER UN MARKET A LA MOSQUEE
    const markPoint = L.marker([12.6313593,-8.0273106]);
    markPoint.bindPopup('<p>Mosquee de YOUCOUBA</p>')
    this.map.addLayer(markPoint);

    
  }
  }

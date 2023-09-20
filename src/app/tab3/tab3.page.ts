import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{

  map: L.Map | undefined;
  
  latitude!: number;
  longitude!: number;

  constructor() {}

  ionViewDidEnter(){

    // COORDONNE DE LA MOSQUEE A RECHERCHER
    this.map = L.map('mapID').setView([12.6313593,-8.0273106],50)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint = L.marker([12.6313593,-8.0273106]);
    markPoint.bindPopup('<p>Mosquee de YOUCOUBA GUINDO</p>')
    this.map.addLayer(markPoint);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint1 = L.marker([12.6308461,-8.0274648]);
    markPoint1.bindPopup('<p>Mosquee de AL KOUSRAT</p>')
    this.map.addLayer(markPoint1);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint2 = L.marker([12.6307348,-8.0276419]);
    markPoint2.bindPopup('<p>Mosquee MOUBARAK</p>')
    this.map.addLayer(markPoint2);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint3 = L.marker([12.6305198,-8.0277519]);
    markPoint3.bindPopup('<p>Mosquee AL FIRDAWS</p>')
    this.map.addLayer(markPoint3);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint4 = L.marker([12.6307143, -8.0270724]);
    markPoint4.bindPopup('<p>Mosquee ABDOULAYE KOITA </p>')
    this.map.addLayer(markPoint4); 
    
    // AJOUTER UN MARKET A this.latitudetude
    const markPoint5 = L.marker([12.6308313,-8.0268987]);
    markPoint5.bindPopup('<p>Mosquee OUATTARA </p>')
    this.map.addLayer(markPoint5);
   
  }


}


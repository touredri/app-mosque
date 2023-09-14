import { Component } from '@angular/core';
import 'moment-hijri';
import 'moment/locale/fr';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map: L.Map | undefined;
  
  latitude!: number;
  longitude!: number;

  constructor() {}

  ngOnInit(): void {

    // Geolocation.getCurrentPosition().then((result : any) =>{
    // this.latitude = result.coords.latitude;
    // this.longitude = result.coords.longitude;
    // console.log(this.longitude+'  '+this.latitude);
    // });

  }

  ionViewDidEnter(){

    // COORDONNE DE LA MOSQUEE A RECHERCHER
    this.map = L.map('mapID').setView([12.63441, -8.02650],20)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint = L.marker([12.63441, -8.02650]);
    markPoint.bindPopup('<p>Mosquee de YOUCOUBA</p>')
    this.map.addLayer(markPoint);

    // AJOUTER UN MARKET A this.latitudetude
    const markPoint2 = L.marker([12.63149, -8.02659]);
    markPoint2.bindPopup('<p>Mosquee 2</p>')
    this.map.addLayer(markPoint2);
      
   
  }


}


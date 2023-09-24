import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapelet',
  templateUrl: './chapelet.page.html',
  styleUrls: ['./chapelet.page.scss'],
})
export class ChapeletPage implements OnInit {

  compteur: number = 0;
  limite: number= 100
  tour:number= 0
  

  constructor() {}
  ngOnInit(): void {
      
  }

  incrementerCompteur() {
    this.compteur++
    if(this.compteur===this.limite){
     this.compteur=0 
     this.tour++
    }
  }

  decrementerCompteur() {
    if(this.compteur>0){
      this.compteur--
    }
    
  }

  renitialiseCompteur() {
    this.compteur = 0;
    this.tour = 0
  }

  

}



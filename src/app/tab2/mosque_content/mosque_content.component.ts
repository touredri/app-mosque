import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import 'leaflet-routing-machine';

import { FirestoreService } from 'src/app/service/firestore.service';



@Component({
  selector: 'app-mosque-content',
  templateUrl: './mosque_content.component.html',
  styleUrls: ['./mosque_content.component.scss'],
  standalone : true,
  imports: [CommonModule, IonicModule, RouterLink]
})


export class MosqueComponent  implements OnInit {

  mosquees: any[] = [];

  constructor(private dataService: FirestoreService) {}

  ngOnInit() {
    // Utilisez la méthode getMosquees du service pour récupérer les données
    this.dataService.getMosquees().subscribe((data) => {
      this.mosquees = data;
      console.log(this.mosquees);
      
    });
  }

  searchMosquees(searchTerm: string) {
    // Vérifiez si la chaîne de recherche est vide
    // if (!searchTerm.trim()) {
    //   this.mosquees = this.mosquees;
    //   console.log(this.mosquees);
    //   return;
    // }
  
    // Utilisez la méthode getMosquees du service pour récupérer les données
    // this.mosquees.getMosquees().subscribe((data) => {
      // Filtrer les résultats en fonction de la chaîne de recherche
      this.mosquees = this.mosquees.filter((mosquee) =>
        mosquee.nom && mosquee.nom.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
  // }
}



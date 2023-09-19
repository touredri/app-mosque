import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
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
}



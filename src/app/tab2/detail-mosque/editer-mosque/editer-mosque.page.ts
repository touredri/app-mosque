import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-editer-mosque',
  templateUrl: './editer-mosque.page.html',
  styleUrls: ['./editer-mosque.page.scss'],
})
export class EditerMosquePage implements OnInit {

  mosquees: any[] = [];

  constructor(
    private dataService: FirestoreService
  ) { }

  ngOnInit() {
    // Utilisez la méthode getMosquees du service pour récupérer les données
    this.dataService.getMosquees().subscribe((data) => {
      this.mosquees = data;
      console.log(this.mosquees);
      
    });
  }

}

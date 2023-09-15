import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-editer-mosque',
  templateUrl: './editer-mosque.page.html',
  styleUrls: ['./editer-mosque.page.scss'],
})
export class EditerMosquePage implements OnInit {

  mosquees: any;
  id: any;

  constructor(
    private dataService: FirestoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // Utilisez la méthode getMosquees du service pour récupérer les données
    this.mosquees = this.dataService.getMosqueeById(this.id)
  }
}

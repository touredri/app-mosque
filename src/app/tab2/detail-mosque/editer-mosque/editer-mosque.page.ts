import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    private firestores: AngularFirestore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // Utilisez la méthode getMosquees du service pour récupérer les données
    if(this.id) {
      this.firestores
        .collection('mosquees', (ref) => ref.where('info.id', '==', parseInt(this.id, 10)))
        .valueChanges()
        .subscribe((mosquess: any) => {
          if (mosquess.length > 0) {
            // Si des documents correspondent, prenez le premier
            this.mosquees = mosquess[0];
          } 
          });
    }
  }
}

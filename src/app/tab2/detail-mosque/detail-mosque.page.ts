import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/service/detail.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-detail-mosque',
  templateUrl: './detail-mosque.page.html',
  styleUrls: ['./detail-mosque.page.scss'],
})
export class DetailMosquePage implements OnInit {

  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute,
    private firestore: FirestoreService,
    private firestores: AngularFirestore
  ) { }
  id: any;
  mosques: any;
  ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   if(this.id) {
    this.firestores
      .collection('mosquees', (ref) => ref.where('info.id', '==', parseInt(this.id, 10)))
      .valueChanges()
      .subscribe((mosquess: any) => {
        if (mosquess.length > 0) {
          // Si des documents correspondent, prenez le premier
          this.mosques = mosquess[0];
          // console.log(this.mosques.info.nom)
        } 
        });
   }
  }

  getData(){
    
  }

}

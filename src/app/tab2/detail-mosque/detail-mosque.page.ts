import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Storage } from '@ionic/storage';

const { Browser } = Plugins;

@Component({
  selector: 'app-detail-mosque',
  templateUrl: './detail-mosque.page.html',
  styleUrls: ['./detail-mosque.page.scss'],
})
export class DetailMosquePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private firestores: AngularFirestore,
    private localStorage: Storage
  ) { }
  id: any;
  mosques: any;
  user: any;
  async ngOnInit() {
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
   this.localStorage.create();
   this.user = JSON.parse(await this.localStorage.get('user'));
  }

  getData(){
    
  }

}

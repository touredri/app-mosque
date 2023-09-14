import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPopupRadioPage } from 'src/app/modal-popup-radio/modal-popup-radio.page';
import { RadioService } from 'src/app/service/radio.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  
  modelData: any; 
  radios: Observable<any[]>;
  // formRadios!: FormGroup
  listeRadio: any;
  constructor(private formBuilder:FormBuilder, 
    private modalController:ModalController,
    private service:RadioService,
    private firestore: AngularFirestore) {
    
   }

  ngOnInit() {
    this.radios = this.getRadios();
    this.radios.subscribe((data: any) => {
      this.listeRadio = data;

    })
  }
  
  getRadios(): Observable<any[]> {
    return this.firestore.collection('radios').valueChanges();
  }

  async openIonModal() {
    const modal = await this.modalController.create({
      component: ModalPopupRadioPage,
      componentProps: {
        // "rempli":"rrr"
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }

    
  


// function openIonModal() {
//   throw new Error('Function not implemented.');
// }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPopupRadioPage } from 'src/app/autres/radio/modal-popup-radio/modal-popup-radio.page';
import { RadioService } from 'src/app/service/radio.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireList } from '@angular/fire/compat/database';
import { Radio } from 'src/app/models/radios.model';
import { Router } from '@angular/router';
import { ModifRadioPage } from './modif-radio/modif-radio.page';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  listRadio!:AngularFireList<any>
  modelData: any; 
  radios : Radio[];
  // formRadios!: FormGroup
  listeRadio: any;
  constructor(private formBuilder:FormBuilder, 
    private modalController:ModalController,
    private service:RadioService,
    private firestore: AngularFirestore,
    private router:Router) {
    
   }

  

  ngOnInit() {
    this.service.getRadios().subscribe(data =>{
      this.radios= data.map(r =>{
        return{
          id:r.payload.doc.id,
          ...r.payload.doc.data as{}
        } as Radio
      })
    })
    console.log(this.radios)
    }   


    supprimer(radio:any){
      if(confirm("vous etes sur de supprimer"+radio.nom)){
        this.service.deleteRadios(radio)
      }
    }
  
    ondelete(id:number){
      this.firestore.doc('radios/'+id).delete()
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

async edit() {
  const modal = await this.modalController.create({
    component: ModifRadioPage,
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

async openIonModaledit() {
  const modal = await this.modalController.create({
    component: ModifRadioPage,
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

}

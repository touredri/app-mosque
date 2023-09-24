import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RadioService } from '../../../service/radio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Radio } from '../../../models/radios.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modif-radio',
  templateUrl: './modif-radio.page.html',
  styleUrls: ['./modif-radio.page.scss'],
})
export class ModifRadioPage implements OnInit {
  radios:Radio[]
  public radioid: string;
  listRadio!:AngularFireList<any>
  modelData: any; 
  listeRadio: any;
  modifierform: FormGroup;
  radioRef:any


  constructor(private service:RadioService,
    public formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private firestore:AngularFirestore,
    private modalController:ModalController,
    ) {
      this.modifierform= this.formBuilder.group({
        nom:[null],
        frequence:[null],
        fluxAudio:[null],
        emplacement:[null]
      })
     }

    

  ngOnInit(): void {
    const idradio= this.route.snapshot.paramMap.get('id')

    this.service.getRadiosId(idradio).subscribe(data =>{
      this.radioRef= data;
      this.modifierform=this.formBuilder.group({
        nom:[this.radioRef.nom],
        frequence:[this.radioRef.frequence],
        fluxAudio:[this.radioRef.fluxAudio],
        emplacement:[this.radioRef.emplacement]
      })
    })
  

    // this.service.getRadios().subscribe(data =>{
    //   this.radios= data.map(r =>{
    //     return{
    //       id:r.payload.doc.id,
    //       ...r.payload.doc.data
    //     } as Radio
    //   })
    // })
    // console.log(this.radios)
  }

  // async openIonModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPopupRadioPage,
  //     componentProps: {
  //       // "rempli":"rrr"
  //     }
  //   });
  //   modal.onDidDismiss().then((modelData) => {
  //     if (modelData !== null) {
  //       this.modelData = modelData.data;
  //       console.log('Modal Data : ' + modelData.data);
  //     }
  //   });
  //   return await modal.present();
  // }

  onEnregistrer(){
    const id= this.route.snapshot.paramMap.get('id')
    this.service.updateRadios(this.modifierform.value, id);
  }

  editRadio(radio:Radio){
    this.firestore.doc('/'+radio.id).update(radio)
  }


  async closeModel() {
    // const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  // retour(){
  //   this.router.navigate(['radio'])
  // }
  
 

  

 



  

}

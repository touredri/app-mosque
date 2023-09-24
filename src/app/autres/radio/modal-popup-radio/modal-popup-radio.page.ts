import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RadioService } from '../../../service/radio.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Radio } from '../../../models/radios.model';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-popup-radio',
  templateUrl: './modal-popup-radio.page.html',
  styleUrls: ['./modal-popup-radio.page.scss'],
})
export class ModalPopupRadioPage implements OnInit {

  @Input() model_title: string;
  radios!:Radio[]
  formRadios:FormGroup
  constructor(
    private modalController: ModalController, 
    private service:RadioService,
    private radioAdd: AngularFirestore,
    private formbuilder:FormBuilder,
    private router:Router
    ) { 
      this.formRadios= this.formbuilder.group({
        nom:[null],
        frequence:[null],
        fluxAudio:[null],
        emplacement:[null]
      })
    }

 

  
  ngOnInit() {

    
  }

  async closeModel() {
    // const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  onSub(){
    this.onSubmit(this.formRadios.value)
  }

  onSubmit( formValue : {nom:string, frequence:number, fluxAudio:string, emplacement:string}){
    const emission:Radio= {
      ...formValue,
      id:""
    }
    this.radioAdd.collection('radios').add(emission),
     console.log(emission)
  }

  onSubmitt(){
      this.service.addRadios(this.formRadios.value)
      this.router.navigate(["radio"])
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RadioService } from '../service/radio.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-modal-popup-radio',
  templateUrl: './modal-popup-radio.page.html',
  styleUrls: ['./modal-popup-radio.page.scss'],
})
export class ModalPopupRadioPage implements OnInit {

  @Input() model_title: string;

  constructor(
    private modalController: ModalController, 
    private service:RadioService,
    private radioAdd: AngularFirestore
    ) { }

 radio = {
  nom: '',
  frequence: 0,
  fluxAudio: '',
  emplacement: ''
 }


  ngOnInit() {
  }

  async closeModel() {
    // const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  onSubmit(){
    this.radioAdd.collection('radios').add({
      nom: this.radio.nom,
      frequence: this.radio.frequence,
      fluxAudio: this.radio.fluxAudio,
      emplacement: this.radio.emplacement
    }),
    this.radio = {
      nom: '',
      frequence: 0,
      fluxAudio: '',
      emplacement: ''
     }
  }

}

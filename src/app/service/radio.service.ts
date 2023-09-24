import { Injectable } from "@angular/core";
import { Radio } from "../models/radios.model";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/compat/database";
import { ToastController } from '@ionic/angular';
import { error } from "console";


@Injectable({
    providedIn:'root'
})
export class RadioService{
    listRadio!:AngularFireList<any>
    radio!:AngularFireObject<any>
    private toastobj: any;

    constructor(private firestore:AngularFirestore ){}

    
    

      getRadios() {
        return this.firestore.collection('radios').snapshotChanges();
      }

      getRadiosId(id:any){
        return this.firestore.collection("radios").doc(id).valueChanges()
      }


      addRadios(radio:Radio){
        return new Promise<any>((resolve, reject) => {
          this.firestore
          .collection("radios")
          .add(radio)
          .then(response =>{console.log(response)}, error =>{reject(error)})
        })
      }

      deleteRadios(radio: { id: string | undefined; }){
        return this.firestore
        .collection("radios")
        .doc(radio.id)
        .delete()
      }


      updateRadios(radio:Radio, id: any){
        return this.firestore
        .collection("radios")
        .doc(id)
        .update({
          nom: radio.nom,
          frequence:radio.frequence,
          fluxAudio:radio.fluxAudio,
          emplacement:radio.emplacement
        })
      }
}
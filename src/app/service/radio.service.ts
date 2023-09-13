import { Injectable } from "@angular/core";
import { Radio } from "../models/radios.model";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/compat/database";


@Injectable({
    providedIn:'root'
})
export class RadioService{
    listRadio!:AngularFireList<any>
    radio!:AngularFireObject<any>

    constructor(private firestore:AngularFireDatabase){}
    mesRadios:Radio[] = [
        {
            id:            1,
            nom:           "La voix de l'islam",
            frequence:     105,
            fluxAudio:     "https://radioenlignefrance.com/la-voix-de-lislam",
            logo:          "https://www.jolibafm.com/upload/design/5b6479d8ec98f8.90358261.jpg",
            description:   "la voix de l'islam",
            emplacement:   'Maroc',
            langue:        "Arabe"
        }
    ]



    getAllRadio() :Radio[]{
        return this.mesRadios
    }

    onAdd(formValue: { nom: string,fluxAudio:string,frequence:number,logo:string,emplacement?:string ,langue?:string, description?: string }) {
        const radio: Radio = {
            ...formValue,
            id: this.mesRadios[this.mesRadios.length - 1].id + 1
        }
        this.mesRadios.push(radio)
    }

    onAddRadio(formValue: { nom: string,fluxAudio:string,frequence:number,logo:string,emplacement?:string ,langue?:string, description?: string }) {
        return this.listRadio.push({
            formValue,
            id: this.mesRadios[this.mesRadios.length -1].id + 1
        })
    }

    // getRadio(id:number){
    //     this.radio= this.firestore.object('/radio/' + id)
    //     return this.radio
    // }

    getAllRadios(){
        this.listRadio = this.firestore.list('/radio')
    }

    editRadios(id:any ,radio:Radio){
        return this.radio.update({
            id: radio.id,
            nom: radio.nom,
            frequence: radio.frequence,
            fluxAudio: radio.fluxAudio,
            logo:radio.logo,
            description : radio.description,
            emplacement : radio.emplacement,
            langue : radio.langue
        
        })
    }


    deleteRadio(id:number){
        this.radio = this.firestore.object('/radio/'+ id)
        this.radio.remove()
    }
}
import { Injectable } from "@angular/core";
import { Radio } from "../models/radios.model";
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

    getAllRadios(){
        this.listRadio = this.firestore.list('/radio')
    }

}
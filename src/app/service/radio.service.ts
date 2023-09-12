import { Injectable } from "@angular/core";
import { Radio } from "../model/radio.model";


@Injectable({
    providedIn:'root'
})
export class RadioService{

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
}
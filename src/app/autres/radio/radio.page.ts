import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  radios!: any 
  formRadios!: FormGroup

  constructor(private formBuilder:FormBuilder) {
    
   }

  ngOnInit() {
   this.formRadios= this.formBuilder.group({
      nom:[null],
      frequence:[null],
      fluxAudio:[null],
      logo : [null],
    })


    this.radios = [
      {
        nom: 'Dambé',
        frequence : 104.4,
        lieu : 'bamako',
      },
      {
        nom: 'jεkafo',
        frequence : 100.7,
        lieu : 'bamako',
      },
       {
        nom: 'cherifla',
        frequence : 104.4,
        lieu : 'bamako',
      },
      
    ]
  }

}

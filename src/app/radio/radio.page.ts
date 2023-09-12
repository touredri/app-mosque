import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  radios!: any 
   
  constructor() {
    
   }

  ngOnInit() {
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

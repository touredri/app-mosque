import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  public slides = [
    {
      src: '../assets/280px-Great_Mosque_of_Djenné_1.jpg'
    },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png'
    },
    {
      src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png'
    }
];

public mosquee = [
  {
    src: '../assets/280px-Great_Mosque_of_Djenné_1.jpg'
  },
  {
    src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png'
  },
  {
    src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png'
  }
];

 
}

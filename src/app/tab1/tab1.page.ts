import { Component, OnInit } from '@angular/core';
import { PriereService } from '../service/priere.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  priere: any;
  time: any
  constructor(
    private priereService: PriereService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.time = this.priereService.getTodayPriereTime();
    this.time.subscribe((data: any) => {
      console.log(data); 
    });
     console.log(this.authService.getIsLoggedIn())
}

  public slides = [
    {
      src: '../../assets/280px-Great_Mosque_of_Djenné_1.jpg'
    },
    {
      src: '../../assets/Mosquee_mmm.jpg'
    },
    {
      src: '../../assets/Mundata.jpg'
    }
];

public mosquee = [
  {
    src: '../../assets/280px-Great_Mosque_of_Djenné_1.jpg'
  },
  {
    src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/slider-image-chart.png'
  },
  {
    src: 'https://www.infragistics.com/angular-demos-lob/assets/images/carousel/ignite-ui-angular-charts.png'
  }
];
}

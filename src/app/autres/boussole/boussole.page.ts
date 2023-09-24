import { Component, OnInit } from '@angular/core';
import { BoussoleService  } from 'src/app/service/boussole.service';
import { DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';



@Component({
  selector: 'app-boussole',
  templateUrl: './boussole.page.html',
  styleUrls: ['./boussole.page.scss'],
})
export class BoussolePage implements OnInit {

  heading: number;

  constructor(private service:BoussoleService) { }

  ngOnInit() {
    this.service.startWatching().subscribe(
      (heading) => {
        this.heading = heading.trueHeading; // Utilisez la valeur trueHeading
      },
      (error) => {
        console.error('Erreur lors de la surveillance de la boussole :', error);
      }
    );
  }

  // startCompass() {
  //   this.service.startWatching().subscribe(
  //     (data: DeviceOrientationCompassHeading) => {
  //       this.heading = data;
  //     }
  //   );
  // }

}

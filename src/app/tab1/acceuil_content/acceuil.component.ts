import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { PriereService } from 'src/app/service/priere.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class AcceuilComponent  implements OnInit {
  
  priere: any;
  time: any
  constructor(
    private priereService: PriereService,
    private authService: AuthService
  ) { }

  ngOnInit() {
      
        this.time = this.priereService.getTodayPriereTime();
        console.log(this.time);
        console.log(this.authService.getIsLoggedIn())
  }
}

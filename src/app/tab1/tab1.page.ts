import { Component, OnInit } from '@angular/core';
import { PriereService } from '../service/priere.service';
import { AuthService } from '../service/auth.service';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  priere: any;
  time: any;
  data: any;
  public mosquee: any[] = [];

  constructor(
    private priereService: PriereService,
    private authService: AuthService,
    private firebase: FirestoreService
  ) {}
  ngOnInit(): void {
    this.firebase.getMosquees().subscribe((data: any) => {
      this.data = data;
     // console.log(this.data)
      this.mosquee = [
        {
          id: this.data[1].info.id,
          src: this.data[1].image,
          nom: this.data[1].info.nom  },
        {
          id: this.data[3].info.id,
          src: this.data[3].image,
          nom: this.data[3].info.nom
        },
        {
          id: this.data[0].info.id,
          src: this.data[0].image,
          nom: this.data[0].info.nom 
        }
      
      ]
      // this.time = this.priereService.getTodayPriereTime();
      //   console.log(this.time); 
      console.log(this.authService.getIsLoggedIn());
    });
}

  public slides = [
    {
      src: '../../assets/mosque.jpg'
    },
    {
      src: '../../assets/Mosquee_mmm.jpg'
    },
    {
      src: '../../assets/coran-braille.jpg'
    }
];

}

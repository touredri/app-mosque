import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PriereService } from 'src/app/service/priere.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class AcceuilComponent  implements OnInit {
  prieres: any
  constructor(private priereservice: PriereService) { }

  ngOnInit() {
    this.priereservice.getPriereData().subscribe((data:any) =>{
      this.prieres= data;
      console.log(data);
    });
  }

}

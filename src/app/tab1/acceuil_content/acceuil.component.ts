import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class AcceuilComponent  implements OnInit {
  

  constructor() { }

  ngOnInit() {}

}

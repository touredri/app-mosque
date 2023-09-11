import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mosque-content',
  templateUrl: './mosque_content.component.html',
  styleUrls: ['./mosque_content.component.scss'],
  standalone : true,
  imports: [CommonModule, IonicModule]
})
export class MosqueComponent  implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // this.map = L.map('mapId').setView([35.76943 , -5.80081]);
  } 

}
  
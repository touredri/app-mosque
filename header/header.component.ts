import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

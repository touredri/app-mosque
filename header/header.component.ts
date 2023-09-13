import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {IonicModule} from "@ionic/angular";
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonicModule, RouterLink
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

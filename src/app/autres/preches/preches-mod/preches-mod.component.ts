import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preches-mod',
  templateUrl: './preches-mod.component.html',
  styleUrls: ['./preches-mod.component.scss'],
})
export class PrechesModComponent  implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {}
  onClick () {
    this.route.navigateByUrl("/tabs/accueil")
  }
}

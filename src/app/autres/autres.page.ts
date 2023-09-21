import { Component, OnInit } from '@angular/core';
import { PriereService } from '../service/priere.service';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.page.html',
  styleUrls: ['./autres.page.scss'],
})
export class AutresPage implements OnInit {
  currentTime: any;
  constructor(
    private priereService: PriereService
  ) { }

  ngOnInit() {
    this.priereService.getPriereData().subscribe((data: any) => {
      this.currentTime = this.priereService.dataPrier(data.data);
    });
  }

}

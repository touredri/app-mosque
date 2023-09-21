import { Component, OnInit } from '@angular/core';
import { PriereService } from '../service/priere.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  // data: any;
  currentTime: any;
  constructor(
    private priereService: PriereService
    ) {}

  ngOnInit(): void {
    this.priereService.getPriereData().subscribe((data: any) => {
      this.currentTime = this.priereService.dataPrier(data.data);
    });
  }
}

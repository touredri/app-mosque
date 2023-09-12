import { Component, OnInit } from '@angular/core';
import { CoranService } from '../../service/coran.service';
import { SelectedSourateService } from 'src/app/service/sourate.service';

@Component({
  selector: 'app-coran',
  templateUrl: './coran.page.html',
  styleUrls: ['./coran.page.scss'],
})
export class CoranPage implements OnInit {

  sourates: any[] = [];
  constructor(
    private coranService:CoranService,
    private selectedSourateService: SelectedSourateService
    ) { }
  nombreAyahs(tableau: string | any[]) {
    return tableau.length;
  }
  onItemClick(sourateNumber: number) {
    this.selectedSourateService.setSelectedSourateNumber(sourateNumber);
  }

  ngOnInit() {
    this.coranService.getCoranData().subscribe((data: any) => {
      this.sourates = data.surahs;
    });  
  }
}

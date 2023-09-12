import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedSourateService {
  selectedSourateNumber!: number | 1;

  setSelectedSourateNumber(number: number) {
    this.selectedSourateNumber = number;
  }

  getSelectedSourateNumber() {
    return this.selectedSourateNumber;
  }
}

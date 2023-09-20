import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  constructor(private storage: Storage) {}

  async getLocalMosquees() {}
}

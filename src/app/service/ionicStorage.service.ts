import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  constructor(private storage: Storage) {}
  
  async initializeStorage() {
    if (!this.storage ) {
      // Ionic Storage n'est pas initialisé, alors initialisons-le
    //   this.storage = await this.storage.create();
    }
  }
}

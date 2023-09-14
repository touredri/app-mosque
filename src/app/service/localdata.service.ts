import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  constructor(private storage: Storage) {}

  async getLocalMosquees() {
    // Vérifiez si les données locales existent
    const localData = await this.storage.get('mosquees');

    if (localData) {
      // Si les données locales existent, les récupérer et les convertir en objet
      return JSON.parse(localData);
    } else {
      // Gérez le cas où il n'y a pas de données locales disponibles
      return null;
    }
  }
}

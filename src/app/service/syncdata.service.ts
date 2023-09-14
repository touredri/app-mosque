import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Network } from '@capacitor/network'; // Importez le plugin Network de Capacitor
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  constructor(private storage: Storage, private save_to_local: FirestoreService) {}
  async checkAndSyncData() {
    const status = await Network.getStatus();
    if (status.connected) {
      this.save_to_local.getAndSaveMosqueesLocally();
    }
  }
}

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Storage } from '@ionic/storage';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private storage: Storage, private fireStorage: AngularFireStorage) {}

  async downloadAndSaveImageLocally(imageUrl: string, localFileName: string) {
    const imageRef = this.fireStorage.refFromURL(imageUrl);

    // Téléchargez l'image depuis Firebase Storage et obtenez son URL locale
    const localImageUrl = firstValueFrom(imageRef.getDownloadURL());

    // Enregistrez l'image localement
    await this.storage.set(localFileName, localImageUrl);
  }
}

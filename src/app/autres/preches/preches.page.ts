import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preches',
  templateUrl:'./preches.page.html',
  styleUrls: ['./preches.page.scss'],
})
export class PrechesPage implements OnInit {

           // Liste des prêches audio
           prechesAudio: PrecheAudio[] = [
            { id: 1, name: 'Mahi Ouattara', imam: 'Mahi Ouattara', type: 'Tafsir', audioUrl: '../../../../assets/songs/imam_Mahi_Ouattara.mp3', volume: 6, isPlaying : false },
            { id: 2, name: 'Mahi Ouatt', imam: 'Mahi Ouattara', type: 'Sermon', audioUrl: '../../../../assets/songs/imam_mahi_Ouattara_sur_la_mort(256k).mp3', volume : 6, isPlaying : false },
            { id: 3, name: 'Koita', imam: 'Abdoulaye Koita', type: 'Tafsir', audioUrl: '../../../../assets/songs/Mahi Ouat.mp3', volume : 6, isPlaying : false },
            { id: 4, name: 'Haidara', imam: 'Ousmane C Haidara', type: 'Tafsir', audioUrl: '../../../../assets/songs/Haidara Bani.mp3', volume : 6, isPlaying : false },
          ];
        
          // Sélection de l'utilisateur
          selectedImam: string = '';
          selectedType: string = '';
        
          // Liste des prêches audio filtrés
          filteredPreches: PrecheAudio[] = [];
        
          constructor() {
            this.filteredPreches = this.prechesAudio; // Initialisez la liste filtrée avec tous les prêches au début
          }
        
        
          // Fonction pour filtrer les prêches audio en fonction de la sélection de l'utilisateur
          filterPreches() {
            // Vérifiez si les options sélectionnées existent dans la liste des prêches
            const imamExists = this.selectedImam === '' || this.prechesAudio.some(preche => preche.imam === this.selectedImam);
            //const typeExists = this.selectedType === '' || this.prechesAudio.some(preche => preche.type === this.selectedType);
          
            if (imamExists) {
              // Les options sélectionnées existent, filtrez les données
              this.filteredPreches = this.prechesAudio.filter(preche => {
                return (
                  (this.selectedImam === '' || preche.imam === this.selectedImam) 
                  //&&
                  //(this.selectedType === '' || preche.type === this.selectedType)
                );
              });
            } else {

              // Une ou les deux options sélectionnées n'existent pas, affichez toutes les données
              this.filteredPreches = [];
            }
          }
          
          show() {
            document.getElementById('audio')?.classList.remove('hidden')
          }


  ngOnInit() {
  }

  // Ajoutez ces méthodes à votre composant
togglePlayback(audio: HTMLAudioElement, preche: PrecheAudio) {
  if (this.isPlaying(preche)) {
    audio.pause();
  } else {
    audio.play();
  }
}

isPlaying(preche: PrecheAudio): boolean {
  return preche.isPlaying || false;
}

// Ajoutez cette méthode à votre composant
changeVolume(audio: HTMLAudioElement, preche: PrecheAudio) {
  audio.volume = preche.volume;
}

}
interface PrecheAudio {
  id: number;
  name: string;
  imam: string;
  type: string;
  audioUrl: string;
  volume: number; 
  isPlaying?: boolean;
}
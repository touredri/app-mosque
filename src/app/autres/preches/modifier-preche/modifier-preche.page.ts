import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier-preche',
  templateUrl: './modifier-preche.page.html',
  styleUrls: ['./modifier-preche.page.scss'],
})
export class ModifierPrechePage implements OnInit {

   prechesAudio: PrecheAudio[] = [
    { id: 1, name: 'Mahi Ouattara', imam: 'Mahi Ouattara', type: 'Tafsir', audioUrl: '../../../../assets/songs/imam_Mahi_Ouattara.mp3', volume: 6, isPlaying : false },
    { id: 2, name: 'Mahi Ouatt', imam: 'Mahi Ouattara', type: 'Sermon', audioUrl: '../../../../assets/songs/imam_mahi_Ouattara_sur_la_mort(256k).mp3', volume : 6, isPlaying : false },
    { id: 3, name: 'Koita', imam: 'Abdoulaye Koita', type: 'Tafsir', audioUrl: '../../../../assets/songs/Mahi Ouat.mp3', volume : 6, isPlaying : false },
    { id: 4, name: 'Haidara', imam: 'Ousmane C Haidara', type: 'Tafsir', audioUrl: '../../../../assets/songs/Haidara Bani.mp3', volume : 6, isPlaying : false },
  ];

  selectedImam: string = '';

  filteredPreches: PrecheAudio[] = [];

  constructor() {
    this.filteredPreches = this.prechesAudio; 
  }
  filterPreches() {
    const imamExists = this.selectedImam === '' || this.prechesAudio.some(preche => preche.imam === this.selectedImam);
    if (imamExists) {
      this.filteredPreches = this.prechesAudio.filter(preche => {
        return (
          (this.selectedImam === '' || preche.imam === this.selectedImam) 
        );
      });
    } else {
     
      this.filteredPreches = [];
    }
  }
  
  show() {
    document.getElementById('audio')?.classList.remove('hidden')
  }
ngOnInit() {
}

selectedPreche: PrecheAudio | null = null;

togglePlayback(preche: PrecheAudio) {

if (this.selectedPreche && this.selectedPreche.id !== preche.id) {
const audioElement = document.getElementById('audio-main') as HTMLAudioElement;
audioElement.play();
}

this.selectedPreche = this.selectedPreche === preche ? null : preche;
}



isPlaying(preche: PrecheAudio): boolean {
return preche.isPlaying || false;
}

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
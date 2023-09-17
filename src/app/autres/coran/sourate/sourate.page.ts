import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { CoranService } from 'src/app/service/coran.service';

@Component({
  selector: 'app-sourate',
  templateUrl: './sourate.page.html',
  styleUrls: ['./sourate.page.scss'],
})
export class SouratePage implements OnInit {

  sourate: any;
  audioUrl!: string;
  ayahs: any[] = [];

  currentAudioIndex: number = 0;
  audioPlayer: HTMLAudioElement;
  isPlaying: boolean = false;

  constructor( 
    private route: ActivatedRoute,
    private coranService: CoranService,
    private platform: Platform
  ) { 
    this.audioPlayer = new Audio();
    this.platform.ready().then(() => {
      this.audioPlayer.onended = () => {
        // Appelé lorsque la lecture d'un audio est terminée
        this.playNextAudio();
      };
    });
  };

  ngOnInit() {
    const surahNumber = this.route.snapshot.paramMap.get('id');
    if (surahNumber) {
      this.coranService.getCoranData().subscribe((data: any) => {
      this.sourate = data.surahs.find((s: any) => s.number ==surahNumber);
      this.sourate.ayahs.forEach((a: any) => {
        this.ayahs.push(a.audioSecondary[0]);
      });
    });
    }
    console.log(this.ayahs)
  }

  playAudio() {
    if (this.audioPlayer.paused) {
      this.audioPlayer.src = this.ayahs[this.currentAudioIndex];
      this.audioPlayer.load();
      this.audioPlayer.play();
      this.isPlaying = true;
    } else {
      this.audioPlayer.pause();
      this.isPlaying = false;
    }
  };

  playNextAudio() {
    this.currentAudioIndex++;
    if (this.currentAudioIndex < this.ayahs.length) {
      this.playAudio();
    } else {
      // Tous les audios ont été lus, réinitialisez l'index
      this.currentAudioIndex = 0;
      this.isPlaying = true
    }
  };

  playPreviousAudio() {
    this.currentAudioIndex--;
    if (this.currentAudioIndex >= 0) {
      this.playAudio();
    } else {
      // Si vous êtes au début de la liste, revenez à la fin
      this.currentAudioIndex = this.ayahs.length - 1;
      this.playAudio();
    }
  }
}

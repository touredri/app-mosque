import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class PriereService {

  constructor(
    private http: HttpClient
  ) { }

  getPriereData():any {
    return this.http.get('assets/prayer_time.json');
  }

  dataPrier(data: any) {
    const currentDate = new Date(); // Date actuelle du dispositif au format Date
  
    // Parcourez la liste des objets "priere"
    for (const priere of data) {
      // Obtenez la date au format "01 Sep 2023" de l'objet "date"
      const priereDate = new Date(priere.date.readable);
  
      // Comparez les dates
      if (currentDate.toDateString() === priereDate.toDateString()) {
        return priere;
      }
    }
    // Si aucune correspondance n'est trouvée
    return null; // Ou retournez null ou effectuez une autre action en conséquence
  }
  
  async checkNetworkConnection() {
    const status = await Network.getStatus();
    if (status.connected) {
      this.getPriereData().subscribe((data: any) => {
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        console.log('Connecté à Internet');
        if(parseInt(data.data[0].date.gregorian.year) < year) {
          this.http.get(`http://api.aladhan.com/v1/calendarByCity/${year}/9?city=Bamako&country=Mali&method=3`)
          .subscribe((response: any) => {
            this.http.put('assets/data/prayer_time.json', response);
          })
        } else if(parseInt(data.data[0].date.gregorian.month) < month) {
          this.http.get(`http://api.aladhan.com/v1/calendarByCity/${month}/9?city=Bamako&country=Mali&method=3`)
          .subscribe((response: any) => {
            this.http.put('assets/data/prayer_time.json', response);
          })
        }
      })
    }
  }
}

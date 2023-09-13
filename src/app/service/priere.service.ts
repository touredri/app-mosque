import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriereService {

  constructor(
    private http: HttpClient
  ) { }

  getPriereData() {
    return this.http.get('assets/prayer_time.json');
  }

  getTodayPriereTime() {
    const currentDate = new Date();
    const priereData = this.getPriereData();
  
    return priereData.pipe(
      find((date: any) => {
        return date.readable === currentDate;
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriereService {

  constructor(
    private http: HttpClient
  ) { }

  getPriereData(): Observable<any[]> {
    return this.http.get('assets/prayer_time.json').pipe(
      map((data: any) => {
        return Object.values(data.priere); 
      })
    );
  }
  
  getTodayPriereTime() {
    const currentDate = new Date();
    const currentDateStr = currentDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
    const todayPriereTime = this.getPriereData();
    todayPriereTime.subscribe((data) => {
      const todayPriere = data.find((item: any) => item.date === currentDateStr);
      return todayPriere;
    });
  }
}

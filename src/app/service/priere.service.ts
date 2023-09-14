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
        // Assuming data is not an array and you need to convert it to an array
        return Object.values(data); // Converts data into an array
      })
    );
  }
  
  getTodayPriereTime(): Observable<any> {
    const currentDate = new Date();
    const currentDateStr = currentDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  
    return this.getPriereData().pipe(
      map((data: any[]) => {
        const todayPriereTime = data.find((date: any) => {
          return date.priere.readable === currentDateStr;
        });
        if (!todayPriereTime) {
          console.log("no success")
        }
        return todayPriereTime;
      })
    );
  }
  }

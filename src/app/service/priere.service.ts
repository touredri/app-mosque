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

  getPriereData():any {
    return this.http.get('assets/prayer_time.json');
  }
}

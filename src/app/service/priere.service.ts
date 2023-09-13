import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriereService {

  constructor(private http: HttpClient) { }
  getPriereData(){
    return this.http.get("assets/prayer_time.json");
  }
  
}

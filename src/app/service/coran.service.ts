import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class CoranService{

  constructor (
      private http: HttpClient
  ) {}
  getCoranData () {
    return this.http.get("assets/coran.json");
    }    
}
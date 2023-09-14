import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  mosque: any;
  constructor() { }

  detail(mosque: any) {
    this.mosque = mosque
  }

  getdetail() {
    return  this.mosque ;
  }
}

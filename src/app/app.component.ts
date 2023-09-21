import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './service/firestore.service';
import  Network  from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  data: any;

  constructor(
    private  firebase: FirestoreService,
    ) {}

  ngOnInit() {
    this.firebase.init();
  } 
}

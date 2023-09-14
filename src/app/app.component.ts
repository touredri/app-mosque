import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './service/firestore.service';
import { LocalDataService } from './service/localdata.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  data: any;

  constructor(
    private  firebase: FirestoreService,
    private localData: LocalDataService,
    ) {}

  ngOnInit(): void {
    // this.data = this.firebase.getAndSaveMosqueesLocally(),
    // console.log(this.data);
    
    // this.localData.getLocalMosquees(),
    // console.log(this.data);
    
  }

  getAllMosquee(){
 
  }
}

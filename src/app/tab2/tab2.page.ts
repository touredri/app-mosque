import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  data: any;

  constructor(
    private firebase: FirestoreService
    ) {}

  ngOnInit(): void {
    this.data = this.firebase.getAndSaveMosqueesLocally()
  }

}

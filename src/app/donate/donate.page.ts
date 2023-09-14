import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage  implements OnInit {
  donate = {
    titre: '',
    montant: 0,
    date: '',
  };

  constructor(private donateAdd: AngularFirestore) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Ajouterdonate() {
    console.log("ok");
    this.donateAdd.collection('donate').add({
      titre: this.donate.titre,
      description: this.donate.montant,
      date: this.donate.date
    })
    this.donate = {
      titre: '',
      montant: 0,
      date: '',
    };
};
}

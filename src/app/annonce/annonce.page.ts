import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {
  annonce = {
    titre: '',
    description: '',
    date: '',
  };
  constructor(private annonceAdd: AngularFirestore) { }
  ajouterAnnonce() {
    this.annonceAdd.collection('annonces').add({
      titre: this.annonce.titre,
      description: this.annonce.description,
      date: this.annonce.date
    })
    this.annonce = {
      titre: '',
      description: '',
      date: '',
    };
  };
  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ajouterAnnonce() {
    // Ici, vous pouvez traiter les données du formulaire, les envoyer à un service, etc.
    console.log(this.annonce);
    // Réinitialisez le formulaire après l'ajout si nécessaire
    this.annonce = {
      titre: '',
      description: '',
      date: '',
    };
  };
  
  ngOnInit() {}

}

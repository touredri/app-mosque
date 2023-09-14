import { Component, OnInit } from '@angular/core';
//import { RadioComponent } from '../liste-radio/radio/radio.component';
// import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { AppModule } from 'src/app/app.module';
@Component({
  selector: 'app-preches',
  templateUrl: './preches.component.html',
  styleUrls: ['./preches.component.scss'],
  // standalone: true,
  // imports: [AppModule ,RadioComponent, IonicModule, CommonModule, FormsModule]
})
export class PrechesComponent  implements OnInit {

 

  ngOnInit() {}

  
// Ajoutez un nouvel élément
addItem() {
  const newItem = { name: 'Nouvel élément' };
  }
}



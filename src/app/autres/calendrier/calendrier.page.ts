import { Component, OnInit } from '@angular/core';
import { DateImportant } from 'src/app/models/dateImportant.model';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {

 
  daysInMonth: number[] = [];

  dateImportant!:DateImportant[]
  constructor() { }

  ngOnInit() {

    this.generateCalendar();

    this.dateImportant=[
      {
        nom:"Hégire (Nouvel An musulman)",
        date:"1 Muharram"
      },
      {
        nom:"Achoura",
        date:"10 Muharram"
      },
      {
        nom:"Rajab ",
        date:"11 Rajab"
      },
      {
        nom:"Laylat al-Qadr",
        date:"21, 23, 25, 27 ou 29 Ramadan"
      },
      {
        nom:"Eid al-Fitr",
        date:"1 Shawwal"
      },
      {
        nom:"Eid al-Adha",
        date:"10 Dhu al-Hijjah"
      },
      {
        nom:"Mawlid al-Nabi",
        date:"12 Rabi' al-Awwal"
      }
    ]

  }

  generateCalendar() {
    const currentDate = new Date();
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let day = 1; day <= lastDayOfMonth; day++) {
      this.daysInMonth.push(day);
    }
  }
}

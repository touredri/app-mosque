import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import * as moment from 'moment-hijri';

@Component({
  selector: 'app-hijri-calendar',
  templateUrl: 'hijri-calendar.component.html',
  styleUrls: ['hijri-calendar.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class HijriCalendarComponent implements OnInit {
  currentDate!: moment.Moment;
  hijriDates!: moment.Moment[][];
  currentMonthName!: string;
  currentYear!: number;
  constructor() {}

  ngOnInit() {
    moment.locale()
    this.currentDate = moment(); // Current date
    this.updateCalendar();
  }

  updateCalendar() {
    // Use the moment-hijri library to calculate Hijri dates for the current month
    const firstDay = this.currentDate.clone().startOf('iMonth');
    const lastDay = this.currentDate.clone().endOf('iMonth');
    const hijriDates: moment.Moment[][] = [];

    let currentDay = firstDay.clone();
    let week: moment.Moment[] = [];

    while (currentDay.isSameOrBefore(lastDay)) {
      week.push(currentDay.clone());

      if (currentDay.day() === 6) {
        hijriDates.push(week);
        week = [];
      }

      currentDay.add(1, 'day');
    }

    if (week.length > 0) {
      hijriDates.push(week);
    }

    this.hijriDates = hijriDates;
  }

  nextMonth() {
    this.currentDate.add(1, 'iMonth');
    this.updateCalendar();
  }

  prevMonth() {
    this.currentDate.subtract(1, 'iMonth');
    this.updateCalendar();
  }
}

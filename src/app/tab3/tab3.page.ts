import { Component } from '@angular/core';
import * as moment from 'moment';
import 'moment-hijri';
import 'moment/locale/fr';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  currentDate!: moment.Moment;
  hijriDates!: moment.Moment[][];
  currentMonthName!: string;
  currentYear!: number;

  constructor() {}
  ngOnInit(): void {
    moment.locale('fr');
    this.currentDate = moment();
    this.updateCalendar();
  }

  updateCalendar() {
    // Use the moment-hijri library to calculate Hijri dates for the current month
    const firstDay = this.currentDate.clone().startOf('iMonth');
    const lastDay = this.currentDate.clone().endOf('iMonth');
    const hijriDates: moment.Moment[][] = [];

    let currentDay = firstDay.clone();
    let week: moment.Moment[] = [];

    const arabicMoment = moment(this.currentDate);
  arabicMoment.locale('ar');
    this.currentMonthName = this.currentDate.format('MMMM');
    this.currentYear = this.currentDate.iYear();

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

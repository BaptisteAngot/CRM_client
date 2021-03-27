import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'fr',
    events: [
      { title: 'event 1', date: '2021-03-26' },
      { title: 'event 2', date: '2021-03-27' }
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
  };

  ngOnInit(): void {
  }

}

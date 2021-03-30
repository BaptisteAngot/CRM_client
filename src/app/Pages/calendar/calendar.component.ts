import {Component, Inject, OnInit} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';
import {DialogEvent} from './Dialog/dialog-event.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'fr',
    events: [
      { title: 'event 1', date: '2021-03-26' },
      { title: 'event 2', date: '2021-03-27', }
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
  };

  openDialog(): void {
    this.dialog.open(DialogEvent, {

    });
  }

  ngOnInit(): void {
  }

}

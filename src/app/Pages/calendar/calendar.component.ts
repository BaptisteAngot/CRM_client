import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular';
import { MatDialog } from '@angular/material/dialog';
import {DialogEvent} from './Dialog/dialog-event.component';
import {RendezVousService} from '../../Services/rendez-vous.service';
import {EventDTOInterface} from '../../Modals/EventDTO.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: Array<any> = [];
  testarray: Array<any> = [];

  @ViewChild('calendar') calendar: FullCalendarComponent;

  constructor(public dialog: MatDialog, private rendezVousService: RendezVousService) {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'fr',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    eventTextColor: '#000000',
  };

  openDialog(): void {
    this.dialog.open(DialogEvent, {

    });
  }
  getItem(): void {
    this.rendezVousService.getRendezVous().subscribe(data => {
      data.forEach(evenement => {
        const testObj = {
          title: evenement.description,
          start: evenement.date_start,
          end: evenement.date_end
        };
        this.calendar.getApi().addEvent(testObj);
        this.calendar.getApi().render();
      });

    }, error => {

    });
  }

  ngOnInit(): void {
    this.getItem();
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interaction from '@fullcalendar/interaction';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import {DialogEvent} from './Pages/calendar/Dialog/dialog-event.component';
import { CalendarComponent } from './Pages/calendar/calendar.component';

import { authInterceptorProviders } from './Helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MenuComponent } from './Components/menu/menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interaction
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    DialogEvent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

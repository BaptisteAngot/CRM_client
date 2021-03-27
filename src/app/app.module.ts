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

import { authInterceptorProviders } from './Helpers/auth.interceptor';
import { CalendarComponent } from './Pages/calendar/calendar.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interaction
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ProfilComponent } from './Pages/profil/profil.component';
import { ProspectComponent } from './Pages/prospect/prospect.component';
import {MatSortModule} from '@angular/material/sort';
import { ProspectDetailComponent } from './Pages/prospect-detail/prospect-detail.component';
import {MatSelectModule} from '@angular/material/select';
import { ProspectAddComponent } from './Pages/prospect-add/prospect-add.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {InscriptionComponent} from './Pages/inscription/inscription.component';

import { ClientComponent } from './Pages/client/client.component';
import { ClientAddComponent } from './Pages/client-add/client-add.component';
import { ClientDetailComponent } from './Pages/client-detail/client-detail.component';

import { RdvListComponentComponent } from './Components/rdv-list-component/rdv-list-component.component';
import { AddRdvComponent } from './Pages/add-rdv/add-rdv.component';
import { AddRdvClientComponent } from './Pages/add-rdv-client/add-rdv-client.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { UserComponent } from './Pages/user/user.component';
import { AdministrateurComponent } from './Pages/administrateur/administrateur.component';
import { UserAddComponent } from './Pages/user-add/user-add.component';
import { UserDetailComponent } from './Pages/user-detail/user-detail.component';


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
    MenuComponent,
    ProfilComponent,
    ProspectComponent,
    ProspectDetailComponent,
    ProspectAddComponent,
    InscriptionComponent,
    DialogEvent,
    InscriptionComponent,
    ClientComponent,
    ClientAddComponent,
    ClientDetailComponent,
    RdvListComponentComponent,
    AddRdvComponent,
    AddRdvClientComponent,
    AccueilComponent,
    UserComponent,
    AdministrateurComponent,
    UserAddComponent,
    UserDetailComponent

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
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

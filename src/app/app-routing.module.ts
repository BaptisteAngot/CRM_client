import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Pages/login/login.component';
import {CalendarComponent} from './Pages/calendar/calendar.component';
import {ProfilComponent} from './Pages/profil/profil.component';
import {ProspectComponent} from './Pages/prospect/prospect.component';
import {ProspectDetailComponent} from './Pages/prospect-detail/prospect-detail.component';
import {ProspectAddComponent} from './Pages/prospect-add/prospect-add.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import {DisconnectComponent} from './Pages/disconnect/disconnect.component';

const routes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'disconnect', component: DisconnectComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'prospect', component: ProspectComponent},
  {path: 'prospect/:id', component: ProspectDetailComponent},
  {path: 'prospect-add', component: ProspectAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

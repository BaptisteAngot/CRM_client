import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Pages/login/login.component';
import {CalendarComponent} from './Pages/calendar/calendar.component';
import {ProfilComponent} from './Pages/profil/profil.component';
import {ProspectComponent} from './Pages/prospect/prospect.component';
import {ClientComponent} from './Pages/client/client.component';
import {ClientAddComponent} from './Pages/client-add/client-add.component';
import {ClientDetailComponent} from './Pages/client-detail/client-detail.component';
import {ProspectDetailComponent} from './Pages/prospect-detail/prospect-detail.component';
import {ProspectAddComponent} from './Pages/prospect-add/prospect-add.component';
import { InscriptionComponent } from './Pages/inscription/inscription.component';
import {AddRdvComponent} from './Pages/add-rdv/add-rdv.component';

const routes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'prospect', component: ProspectComponent},
  {path: 'client', component: ClientComponent},
  {path: 'client-add', component: ClientAddComponent },
  {path: 'client/:id', component: ClientDetailComponent},
  {path: 'prospect/:id', component: ProspectDetailComponent},
  {path: 'prospect-add', component: ProspectAddComponent },
  {path: 'rdvAdd/:id', component: AddRdvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

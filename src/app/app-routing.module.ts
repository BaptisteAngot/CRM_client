import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Pages/login/login.component';
import {CalendarComponent} from './Pages/calendar/calendar.component';
import {ProfilComponent} from './Pages/profil/profil.component';
import {ProspectComponent} from './Pages/prospect/prospect.component';
import {ProspectDetailComponent} from './Pages/prospect-detail/prospect-detail.component';
const routes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'prospect', component: ProspectComponent},
  {path: 'prospect/:id', component: ProspectDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

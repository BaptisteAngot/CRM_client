import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Pages/login/login.component';
import {CalendarComponent} from './Pages/calendar/calendar.component';
import {InscriptionComponent} from './Pages/inscription/inscription.component';

const routes: Routes = [
  {path: 'connexion', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

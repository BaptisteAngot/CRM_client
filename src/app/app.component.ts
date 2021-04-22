import {Component} from '@angular/core';
import {TokenStorageService} from './Services/token-storage.service';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crm-api';
  user: any;
  constructor(private tokenStorageService: TokenStorageService) {
    this.user = tokenStorageService.getUser();
  }
  open(): void {
    const section = document.getElementById('menuBurger');
    if (!section.classList.contains('navActive')) {
      section.classList.add('navActive');
    }else {
      section.classList.remove('navActive');
    }
  }
  onOpen($event: boolean): void {
    console.log($event);
  }
}

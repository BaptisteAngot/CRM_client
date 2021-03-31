import {Component, Input, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() user: any;
  nameSociete: string;
  admin = false;

  constructor() {
    this.nameSociete = environment.nameSociete;
  }

  ngOnInit(): void {
    if (this.user.roles.includes('ROLE_SUPER_ADMIN')) {
      this.admin = true;
    }
  }

}

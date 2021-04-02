import {Component, Input, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
import {TokenStorageService} from '../../Services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() user: any;
  nameSociete: string;
  admin = false;

  constructor(private tokenService: TokenStorageService, private router: Router) {
    this.nameSociete = environment.nameSociete;
  }

  ngOnInit(): void {
    if (this.user.roles.includes('ROLE_SUPER_ADMIN')) {
      this.admin = true;
    }
  }

  disconnectUser(): void {
    this.tokenService.signOut();
    this.router.navigate(['/']);
  }
}

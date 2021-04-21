import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../Services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {

  constructor(private tokenService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.tokenService.signOut();
    this.router.navigate(['/connexion']);
    window.location.reload();
  }

}

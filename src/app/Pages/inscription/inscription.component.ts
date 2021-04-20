import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  newUser: any = {
    roles: false
  };
  registerFailed = false;
  registerSuccessful = false;
  errorMessage = '';

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.authService.register(JSON.stringify(this.newUser)).subscribe(
      data => {
        this.registerSuccessful = true;
        this.registerFailed = false;
        this.router.navigate(['/']);
      },
      error => {
        this.errorMessage = error.error;
        this.registerFailed = true;
      }
    );
  }

}

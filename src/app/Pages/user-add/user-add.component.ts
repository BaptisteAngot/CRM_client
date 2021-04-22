import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {generateErrorMessage} from 'codelyzer/angular/styles/cssLexer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  sendSuccesfull = false;
  user: any = {};

  errors: string = null;

  constructor(private UserService: UserService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.UserService.createUser(this.user).subscribe(value => {
      this.router.navigate(['/user']);
    }, err => {
      this.errors = err.error.error;
    });
  }
}

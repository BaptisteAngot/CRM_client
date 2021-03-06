import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {TokenStorageService} from '../../Services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfos: any = {};
  loginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUser()) {
      console.log('USER LOGIN');
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.authService.login(JSON.stringify(this.loginInfos)).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        delete data.token;
        this.tokenStorage.saveUser(data);
        this.router.navigate(['/']);
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error;
        this.loginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}

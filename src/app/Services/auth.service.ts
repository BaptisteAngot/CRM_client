import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginInfos): Observable<any> {
    return this.httpClient.post('login', loginInfos, httpOptions);
  }

  register(user): Observable<any> {
    return this.httpClient.post('api/user/create', user, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getInfoUser(id): Observable<any> {
    const httpParams = new HttpParams().set('id', id);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
      params: httpParams
    };
    return this.httpClient.post('api/user/userProfil', httpParams.toString() , httpOptions);
  }
}

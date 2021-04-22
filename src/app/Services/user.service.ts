import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUser(): Observable<any> {
    return this.httpClient.get('api/user/getAll', httpOptions);
  }

  getOneUser(id): Observable<any> {
    return this.httpClient.get('api/user/' + id, httpOptions);
  }

  disabledUser(id): Observable<any> {
    return this.httpClient.post('api/user/disabled/' + id, httpOptions);
  }

  updateUser(infos): Observable<any> {
    delete infos.origine;
    delete infos.last_name;
    delete infos.first_name;
    return this.httpClient.put('api/user/update/' + infos.id, JSON.stringify(infos), httpOptions);
  }

  createUser(infos): Observable<any> {
    return this.httpClient.post('api/user/create', JSON.stringify(infos), httpOptions);
  }

  getInfoUser(id): Observable<any> {
    const httpParams = new HttpParams().set('id', id);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
      params: httpParams
    };
    return this.httpClient.post('api/user/userProfil', httpParams.toString() , httpOptions);
  }
}

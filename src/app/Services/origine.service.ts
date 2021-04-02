import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OrigineService {

  constructor(private httpClient: HttpClient) { }

  getAllOrigin(): Observable<any> {
    return this.httpClient.get('api/origine/all', httpOptions);
  }
}

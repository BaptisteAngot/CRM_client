import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getAllClient(): Observable<any> {
    return this.httpClient.get('api/client/getAll', httpOptions);
  }

  getOneClient(id): Observable<any> {
    return this.httpClient.get('api/client/' + id, httpOptions);
  }

  disabledClient(id): Observable<any> {
    return this.httpClient.post('api/client/disabled/' + id, httpOptions);
  }

  updateClient(infos): Observable<any> {
    delete infos.origine;
    return this.httpClient.put('api/client/update/' + infos.id, JSON.stringify(infos), httpOptions);
  }

  createClient(infos): Observable<any> {
    return this.httpClient.post('api/client/create', JSON.stringify(infos), httpOptions);
  }
}

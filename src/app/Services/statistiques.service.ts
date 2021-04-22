import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  constructor(private httpClient: HttpClient) { }

  getNumberAllClient(): Observable<any> {
    return this.httpClient.get('api/statistic/allClients', httpOptions);
  }

  getNumberClient(): Observable<any> {
    return this.httpClient.get('api/statistic/clients', httpOptions);
  }

  getNumberProspects(): Observable<any> {
    return this.httpClient.get('api/statistic/prospects', httpOptions);
  }

  getNumberProspectsStats(): Observable<any> {
    return this.httpClient.get('api/statistic/prospectsStat', httpOptions);
  }


}

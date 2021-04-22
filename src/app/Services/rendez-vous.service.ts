import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private httpClient: HttpClient) { }

  getRendezVous(): Observable<any> {
    return this.httpClient.get('api/rendezvous/getrendezvous', httpOptions);
  }

  getRendezVousProspect(id): Observable<any> {
    return this.httpClient.get('api/rendezvous/getrendezvousProspect/' + id, httpOptions);
  }

  getRendezVousClient(id): Observable<any> {
    return this.httpClient.get('api/rendezvous/getrendezvousClient/' + id, httpOptions);
  }

  addRendezVousProspect(infos): Observable<any> {
    return this.httpClient.post('api/rendezvous/create', infos, httpOptions);
  }
}

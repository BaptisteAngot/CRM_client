import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProspectService {

  constructor(private httpClient: HttpClient) { }

  getAllProspect(): Observable<any> {
    return this.httpClient.get('api/prospect/all', httpOptions);
  }

  getOneProspect(id): Observable<any> {
    return this.httpClient.get('api/prospect/' + id, httpOptions);
  }

  deleteProspect(id): Observable<any> {
    return this.httpClient.delete('api/prospect/delete/' + id, httpOptions);
  }

  disabledProspect(id): Observable<any> {
    return this.httpClient.post('api/prospect/disabled/' + id, httpOptions);
  }

  updateStatusProspect(id, status): Observable<any> {
    const httpParams = new HttpParams().set('status', status);
    const httpOptions2 = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'}),
      params: httpParams
    };
    return this.httpClient.post('api/prospect/status/' + id, httpParams.toString(), httpOptions2);
  }

  updateProspect(infos): Observable<any> {
    delete infos.origine;
    return this.httpClient.put('api/prospect/update/' + infos.id, JSON.stringify(infos), httpOptions);
  }

}

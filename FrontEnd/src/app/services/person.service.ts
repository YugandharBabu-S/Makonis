import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private api = environment.api;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getPersons(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api + '/person/list');
  }

  public createPerson(person: any): Observable<any>{
    return this.httpClient.post<any>(this.api + '/person/new', person);
  }
}

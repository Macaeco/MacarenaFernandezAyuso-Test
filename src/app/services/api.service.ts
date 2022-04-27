import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { fromEvent, Observable } from 'rxjs';
import { User } from '../interfaces/users.types';

@Injectable({
  providedIn: 'root'
})


export class ApiService {


  private _servidorHttp: string = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) {


  }
  public apiCall(): Observable<User[]> {
    return this.http.get<User[]>(this._servidorHttp);
  }

}

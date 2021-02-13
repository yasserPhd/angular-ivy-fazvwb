import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Athlete } from './athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  private atheletesUrl='./employees';
  httpOptions={
    headers:new HttpHeaders({'content-type':'application/json'})
  };
  constructor(private http: HttpClient) { }
  getEmployees():Observable<Athlete[]>{
    return this.http.get<Athlete[]>(this.atheletesUrl)
  }
  getEmployee(id:number): Observable<Athlete>{
    const url=`${this.atheletesUrl}/${id}`;
    return this.http.get<Athlete>(url)
  }
  addEmployee(athlete : Athlete): Observable<Athlete>{
    return this.http.post<Athlete>(this.atheletesUrl,athlete,this.httpOptions)
  }
 
}













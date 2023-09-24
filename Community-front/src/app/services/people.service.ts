import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  URL = "http://localhost:5000"

  constructor(private http:HttpClient) { }

  getAllPeople(): Observable<any>{
    return this.http.get<any[]>(this.URL+"/api/people");
  }

  getById(id:any): Observable<any>{
    return this.http.get<any[]>(this.URL+"/api/people/"+id);
    
  }

  add(dataSend:any): Observable<any>{
    return this.http.post<any>(this.URL+"/api/people", dataSend);
    
  }

  delete(id:any): Observable<any>{
    return this.http.delete<any[]>(this.URL+"/api/people/"+id);

  }
}

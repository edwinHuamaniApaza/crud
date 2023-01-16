import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person2 } from './person2';

@Injectable({
  providedIn: 'root'
})
export class Person2Service {

  private apiURL = "http://127.0.0.1:8000/api/categoria/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Person2[]> {
    return this.httpClient.get<Person2[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(person2): Observable<Person2> {
    return this.httpClient.post<Person2>(this.apiURL, JSON.stringify(person2), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id2): Observable<Person2> {
    return this.httpClient.get<Person2>(this.apiURL + id2)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id2, person2): Observable<Person2> {
    return this.httpClient.put<Person2>(this.apiURL + id2, JSON.stringify(person2), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id2){
    return this.httpClient.delete<Person2>(this.apiURL + id2, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

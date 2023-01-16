import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person3 } from './person3';

@Injectable({
  providedIn: 'root'
})
export class Person3Service {

  private apiURL = "http://127.0.0.1:8000/api/producto/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Person3[]> {
    return this.httpClient.get<Person3[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(person3): Observable<Person3> {
    return this.httpClient.post<Person3>(this.apiURL, JSON.stringify(person3), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id3): Observable<Person3> {
    return this.httpClient.get<Person3>(this.apiURL + id3)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id3, person3): Observable<Person3> {
    return this.httpClient.put<Person3>(this.apiURL + id3, JSON.stringify(person3), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id3){
    return this.httpClient.delete<Person3>(this.apiURL + id3, this.httpOptions)
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

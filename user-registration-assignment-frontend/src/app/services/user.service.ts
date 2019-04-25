import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserData } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  saveUserDetails(User: UserData): Observable<UserData> {
    return this.http.post<any>(this.endpoint + 'saveUserDetails', User)
      .pipe(
        catchError(this.handleErrorObservable)
      );
  }

  updateUserDetails(User: UserData): Observable<UserData> {
    return this.http.post<any>(this.endpoint + 'updateUserDetails', User)
      .pipe(
        catchError(this.handleErrorObservable)
      );
  }
  getUsers(): Observable<any> {
    return this.http.get<any>(this.endpoint + 'getUsers')
      .pipe(
        catchError(this.handleErrorObservable)
      );
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'deleteUser/' + id)
      .pipe(
        catchError(this.handleErrorObservable)
      );
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error);
  }
}

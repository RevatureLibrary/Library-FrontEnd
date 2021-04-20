import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LoginAttempt } from '../models/LoginAttempt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import{ ActiveUser } from 'src/app/models/ActiveUser';
import { environment } from 'src/environments/environment'

@Injectable({providedIn: 'root'})
export class LoginService {
  private jwtSubject: BehaviorSubject<ActiveUser|null>;
  public user?: Observable<ActiveUser|null>;
  
  constructor(
    private router: Router,
    private http: HttpClient
){
  this.jwtSubject = new BehaviorSubject<ActiveUser|null>(JSON.parse(localStorage.getItem('jwtSubject')||'{}'));
  this.user = this.jwtSubject.asObservable();
 }
 public get userValue(): ActiveUser|null {
  return this.jwtSubject.value;
}
login(username: any, password: any) {
  return this.http.post<ActiveUser>(`${environment.apiUrl}/library/authentication`, { username, password })
      .pipe(map(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.jwtSubject.next(user);
          return user;
      }));
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('user');
  this.jwtSubject.next(null);
  this.router.navigate(['/account/login']);
}
register(user: ActiveUser) {
  return this.http.post(`${environment.apiUrl}/users/register`, user);
}

getAll() {
  return this.http.get<ActiveUser[]>(`${environment.apiUrl}/users`);
}

}

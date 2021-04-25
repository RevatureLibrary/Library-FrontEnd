import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ActiveUser } from '../models/ActiveUser';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJUZXN0IiwibGFzdE5hbWUiOiJBZG1pbiIsInN1YiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkanZZUHdleFFRb2hEaTlqOXhYdVhJZUJsWE5hN1NxS1lSTjU1UHVnZzhVQ3RxTUt3ZzNmamUiLCJhdXRoIjoiQURNSU4iLCJleHAiOjE2MTkxNTE2NDcsImlhdCI6MTYxOTEyMjg0N30.gHUwaIgqTxOeKKmunERiPWMIIIPuuIJcHy_5E3Vbrvw',
});

@Injectable({
  providedIn: 'root',
})
export class DeleteUserService {
  user = localStorage.getItem('user');
  activeUser: ActiveUser = JSON.parse(this.user!);
  auth: string = 'Bearer ' + this.activeUser.token;
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.auth,
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<ActiveUser[]> {
    return this.http.get<ActiveUser[]>('http://18.222.177.219:8080/users', {
      headers: {
        Authorization: 'Bearer ' + this.activeUser.token,
        'Content-Type': 'application/json',
      },
    });
  }

  searchUsers(username: string): Observable<ActiveUser[]> {
    return this.http.get<ActiveUser[]>(
      'http://18.222.177.219:8080/users/search=' + username,
      {
        headers: {
          Authorization: 'Bearer ' + this.activeUser.token,
          'Content-Type': 'application/json',
        },
      }
    );
  }
  //18.222.177.219
  deleteUser(id: number) {
    return this.http.delete('http://localHost:8080/library/users/'+ id.toString(), {
      headers: {
        Authorization: 'Bearer ' + this.activeUser.token,
        'Content-Type': 'application/json',
      },
    });
  }
}

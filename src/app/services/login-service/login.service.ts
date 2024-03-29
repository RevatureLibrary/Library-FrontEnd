import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginAttempt } from '../../models/LoginAttempt';
import { Observable } from 'rxjs';
import { ActiveUser } from '../../models/ActiveUser';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  regUrl: string = 'http://18.219.208.21:8080/library/users';
  signUp(newUser: ActiveUser): Promise<ActiveUser> {
    return this.http
      .post<ActiveUser>(this.regUrl, newUser, httpOptions)
      .toPromise<ActiveUser>();
  }
  authUrl: string = 'http://18.219.208.21:8080/library/authentication';
  //18.222.177.219

  constructor(private http: HttpClient) {}

  login(la: LoginAttempt): Observable<ActiveUser> {
    return this.http.post<ActiveUser>(this.authUrl, la, httpOptions);
  }

  logout() {
    localStorage.removeItem('user');
  }

  getActiveUser(): ActiveUser | null{
    let user = localStorage.getItem('user');
    if (user == null){
      return null;
    }
    let activeUser: ActiveUser = JSON.parse(user);
    return activeUser;
  }

  getHeaders(): HttpHeaders | null {
    let user = localStorage.getItem('user');
    if (user == null){
      return null;
    }
    let activeUser: ActiveUser = JSON.parse(user);
    let AHead = new HttpHeaders();
    AHead.append('Authorization', 'Bearer ' + activeUser.token);
    AHead.append('Content-Type', 'application/json');
    return AHead;
  }
}

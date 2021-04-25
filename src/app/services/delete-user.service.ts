import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { User } from "src/app/components/delete-user/delete-user.component";
import { ActiveUser } from '../models/ActiveUser';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]> {
    let user = localStorage.getItem('user');
    let currentUser:ActiveUser = JSON.parse(user!);

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + currentUser.token
    });

    return this.http.get<User[]>("http://18.222.177.219:8080/users", { headers: headers });
  }

  searchUsers(username:string):Observable<User[]> {
    let user = localStorage.getItem('user');
    let currentUser:ActiveUser = JSON.parse(user!);

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + currentUser.token
    });

    return this.http.get<User[]>("http://18.222.177.219:8080/users/search=" + username, { headers: headers });
  }

  deleteUser(user: User):Observable<User> {
    let aUser = localStorage.getItem('user');
    let currentUser:ActiveUser = JSON.parse(aUser!);

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + currentUser.token
    });

    return this.http.delete<User>("http://18.222.177.219:8080/users/" + user.id, { headers: headers});
  }

}
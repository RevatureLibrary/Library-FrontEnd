import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { User } from "src/app/models/User";

const headers = new HttpHeaders({
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxODYxNTg4MSwiaWF0IjoxNjE4NTg3MDgxfQ.AH8FxcP6aksTTkBh4gS2dItICbXQGps7vk_Q-qsi8Hc"
});

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>("/users", { headers: headers });
  }

  deleteUser(user: User):Observable<User> {
    return this.http.delete<User>("/users/" + user.id, { headers: headers});
  }

}

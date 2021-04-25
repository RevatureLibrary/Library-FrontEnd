import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { User } from "src/app/components/delete-user/delete-user.component";

const headers = new HttpHeaders({
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJUZXN0IiwibGFzdE5hbWUiOiJBZG1pbiIsInN1YiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkanZZUHdleFFRb2hEaTlqOXhYdVhJZUJsWE5hN1NxS1lSTjU1UHVnZzhVQ3RxTUt3ZzNmamUiLCJhdXRoIjoiQURNSU4iLCJleHAiOjE2MTkxNTE2NDcsImlhdCI6MTYxOTEyMjg0N30.gHUwaIgqTxOeKKmunERiPWMIIIPuuIJcHy_5E3Vbrvw"
});

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>("/users", { headers: headers });
  }

  searchUsers(username:string):Observable<User[]> {
    return this.http.get<User[]>("/users/search=" + username, { headers: headers });
  }

  deleteUser(user: User):Observable<User> {
    return this.http.delete<User>("/users/" + user.id, { headers: headers});
  }

}
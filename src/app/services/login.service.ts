import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LoginAttempt } from '../models/LoginAttempt';
import { Observable } from 'rxjs';
import { JWT } from '../models/JWT';

const httpOptions = {
  headers: new HttpHeaders ({
    "Content-Type":"application/json"
  } )
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authUrl:string = 'http://localhost:8080/library/authentication';

  constructor(private http:HttpClient) { }

  getToken(la:LoginAttempt):Observable<any> {
    return this.http.post<any>(this.authUrl,la,httpOptions);
  
  }






}

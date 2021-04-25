import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Checkout } from 'src/app/models/Checkout';
import { User } from 'src/app//models/User';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginService } from 'src/app/services/login-service/login.service';

@Injectable({
  providedIn: 'root'
})

export class PatronDetailsService {

  url:string = "http://localhost:8080/library/checkouts/"


  constructor(private http: HttpClient, private loginService: LoginService) { }

  async getAllCheckoutsByUserName(username:string):Promise<Checkout[]> {
    console.log(httpOptions.toString());
    return await this.http.get<Checkout[]>(this.url + "username=" + username, {headers: httpOptions}).toPromise<Checkout[]>();
  }

  returnBook(checkout: Checkout):Promise<Checkout>{
      return this.http.put<Checkout>(this.url + "checkouts/" + checkout.id, httpOptions).toPromise<Checkout>();
  }

}

// const httpOptions = {
//   headers: LoginService.prototype.getHeaders()
// };

const httpOptions = new HttpHeaders({
  "Content-Type" : "application/json",
  Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJQYXRyaWNrIiwibGFzdE5hbWUiOiJHb256YWxleiIsInN1YiI6InBnb256YWxleiIsInBhc3N3b3JkIjoiJDJhJDEwJGt3RlNuM1QzWmRYNmJ3Z1Q3akl3U2U4MWtGTnFTUjhSRW9EU1hUbDhqSU13ZS5DWUlGU0F5IiwiYXV0aCI6IlBBVFJPTiIsImV4cCI6MTYxOTM4OTY5MiwiaWF0IjoxNjE5MzYwODkyfQ.IF3NFBCERh5OHG7f4v1Z4rktfbCW1C3s3Q2Aib7Wus0"
});

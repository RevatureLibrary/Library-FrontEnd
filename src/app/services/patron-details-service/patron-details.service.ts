import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Checkout } from 'src/app/models/Checkout';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginService } from 'src/app/services/login-service/login.service';

@Injectable({
  providedIn: 'root'
})

export class PatronDetailsService {

  url:string = "http://18.219.208.21:8080/library/checkouts/"


  constructor(private http: HttpClient, private loginService: LoginService) { }

  async getAllCheckoutsByUserName(username:string):Promise<Checkout[]> {
    let user = localStorage.getItem('user');
    let activeUser:ActiveUser = JSON.parse(user!);
    return await this.http.get<Checkout[]>(this.url + "username=" + username, { 
        headers: {
            Authorization: 'Bearer ' + activeUser.token,
            'Content-Type': 'application/json'
        }
     }).toPromise<Checkout[]>();
  }

  returnBook(checkout: Checkout):Promise<Checkout>{
    let user = localStorage.getItem('user');
    let activeUser:ActiveUser = JSON.parse(user!);
      return this.http.put<Checkout>(this.url + checkout.id, {
          headers:{
            Authorization: 'Bearer ' + activeUser.token,
            'Content-Type': 'application/json'
          }
      }).toPromise<Checkout>();
  }

}

// const httpOptions = {
//   headers: LoginService.prototype.getHeaders()
// };

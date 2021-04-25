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



  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAllCheckoutsByUserName(username:string):Promise<Checkout[]> {
    console.log(httpOptions.toString());
    return this.http.get<Checkout[]>("/checkouts/username=" + username, httpOptions).toPromise<Checkout[]>();
  }

  returnBook(checkout: Checkout):Promise<Checkout>{
      return this.http.put<Checkout>("/checkouts/" + checkout.id, httpOptions).toPromise<Checkout>();
  }

}

const httpOptions = {
  headers: LoginService.prototype.getHeaders()
};

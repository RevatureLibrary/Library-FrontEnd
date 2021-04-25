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

    return this.http.get<Checkout[]>('/checkouts/username=' + username, {
      headers: {"":"", "Authorization":"Bearer " + this.activeUser.token};
    }).toPromise<Checkout[]>();
  }

  returnBook(checkout: Checkout):Promise<Checkout>{
    let headers: HttpHeaders | null = this.loginService.getHeaders();
      return this.http.put<Checkout>("/checkouts/" + checkout.id, headers).toPromise<Checkout>();
  }

}

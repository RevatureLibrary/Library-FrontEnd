import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Checkout } from 'src/app/models/Checkout';

// Gotta Grab the Token before trying this
const headers = new HttpHeaders({
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxODYxNTg4MSwiaWF0IjoxNjE4NTg3MDgxfQ.AH8FxcP6aksTTkBh4gS2dItICbXQGps7vk_Q-qsi8Hc"
});

@Injectable({
  providedIn: 'root'
})
export class PatronDetailsService {

  constructor(private http: HttpClient) { }

  getAllCheckoutsByUserName():Observable<Checkout[]> {
    return this.http.get<Checkout[]>("/checkouts/username=pgonzalez", { headers: headers });
  }

  returnBook(checkout: Checkout):Observable<Checkout>{
      return this.http.put<Checkout>("/checkouts/" + checkout.id, {headers: headers});
  }

}

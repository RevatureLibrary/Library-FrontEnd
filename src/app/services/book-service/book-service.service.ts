import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveUser } from '../../models/ActiveUser';
import { HttpHeaders } from '@angular/common/http';
import { fromEvent, Observable, throwError } from 'rxjs';
import { Book } from '../../models/Book';
import { map, catchError } from 'rxjs/operators';
import { CheckOutBook } from '../../models/CheckABookOut';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  // user = localStorage.getItem('user');
  // activeUser: ActiveUser = JSON.parse(this.user!);
  // auth: string = 'Bearer ' + this.activeUser.token;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     Authorization: this.auth,
  //     'Content-Type': 'application/json',
  //   }),
  // };
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    let user = localStorage.getItem('user');
    let activeUser: ActiveUser = JSON.parse(user!);
    console.log(activeUser);
    return this.http.get<Book[]>('http://18.219.208.21:8080/library/books', {
      headers: {
        Authorization: 'Bearer ' + activeUser.token,
        'Content-Type': 'application/json',
      },
    });
  }

  checkOutBook(bookId: number) {
    let user = localStorage.getItem('user');
    let activeUser: ActiveUser = JSON.parse(user!);
    console.log(activeUser);
    let checkOutABook = new CheckOutBook(activeUser.username, bookId);
    return this.http
      .post<CheckOutBook>(
        'http://18.219.208.21:8080/library/checkouts',
        checkOutABook,
        {
          headers: {
            Authorization: 'Bearer ' + activeUser.token,
            'Content-Type': 'application/json',
          },
        }
      )
      .toPromise();
  }
}
// {
//   headers: { Authorization: auth, 'Content-Type': 'application/json' },
// }

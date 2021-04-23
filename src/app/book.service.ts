import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './models/Book';
import { BOOKS } from './mock-books';
import { MessageService } from './message.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  
  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    const books = of(BOOKS);
    this.messageService.add('BookService: fetched books');
    return books;
  }
}

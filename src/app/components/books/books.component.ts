import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[];
  constructor() { 
    this.books = [];
   }

  ngOnInit(): void {
    this.books = [
      {
        id: 1,
        title: 'Harry Potter',
        author: 'JK Rowling'
      },
      {
        id: 2,
        title: 'Bible',
        author: 'God'
      }
    ]

    
  }

}

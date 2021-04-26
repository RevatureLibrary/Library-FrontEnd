import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/Book';
import { BookServiceService } from '../../services/book-service/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  submitBook(
    title: string,
    author: string,
    publisher: string,
    isbn: string,
    bookStatus: string,
    condition: string,
    departments: string
  ) {

    let splitted = departments.split(",");
    let book = new Book(0,title,author,publisher,+isbn,bookStatus,condition,splitted);
    let success: Promise<Book> = this.bookService.addBook(book).toPromise();

    if (success === null) alert('edit book failed');
    success.then(
      (something) => {
        localStorage.setItem('user', JSON.stringify(something));
        this.router.navigate(['']);
      },
      () => alert('edit book failed')
    );
  }
}

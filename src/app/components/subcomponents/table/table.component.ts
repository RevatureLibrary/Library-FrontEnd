import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from 'src/app/services/book-service/book-service.service';
import { Book } from '../../../models/Book';
import { Observable } from 'rxjs';
import { BooksComponent } from '../../books/books.component';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  books: Book[] = [];
  dataSource = new MatTableDataSource(this.books);
  displayedColumns: string[] = [
    'title',
    'author',
    'publisher',
    'isbn',
    'departments',
    'checkout',
  ];

  constructor(private service: BookServiceService) {}

  ngOnInit() {
    this.service.getBooks().subscribe((response) => {
      this.books = response;
      this.books = this.books.filter((val) => val.bookStatus === 'AVAILABLE');
      this.dataSource = new MatTableDataSource(this.books);

      console.log(this.dataSource.data);
    });
  }

  // // dataSource = new MatTableDataSource();

  // applyFilter(event: String) {
  //   if (event == 'All') {
  //     // this.dataSource = new MatTableDataSource(BOOK_DATA);
  //   } else {
  //     const filterValue = event;
  //     this.dataSource.filter = filterValue.trim().toLowerCase();
  //   }
  // }
  // applyFilterText(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  applyFilterAuthor(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.author.trim().toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterTitle(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.author.trim().toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterPublisher(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.publisher.trim().toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterISBN(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.isbn.toString().trim().toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRow(book: Book) {
    this.dataSource.data = this.dataSource.data.filter(
      (val) => val.id != book.id
    );
    console.log(book.id);
    this.service.checkOutBook(book.id);
  }
}

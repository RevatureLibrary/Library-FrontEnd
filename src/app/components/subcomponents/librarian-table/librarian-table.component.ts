import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from '../../../services/book-service/book-service.service';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-librarian-table',
  templateUrl: './librarian-table.component.html',
  styleUrls: ['./librarian-table.component.css'],
})
export class LibrarianTableComponent implements OnInit {
  books: Book[] = [];
  dataSource = new MatTableDataSource(this.books);
  displayedColumns: string[] = [
    'title',
    'author',
    'publisher',
    'isbn',
    'status',
    'departments',
    'edit',
  ];

  constructor(private service: BookServiceService) {}

  ngOnInit() {
    this.service.getBooks().subscribe((response) => {
      this.books = response;
      this.dataSource = new MatTableDataSource(this.books);

      console.log(this.dataSource.data);
    });
  }

  applyFilterText(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
      return data.title.trim().toLowerCase().includes(filter);
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

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Book {
  title: string;
  position: number;
  author: string;
  status: string;
  isbn: string;
  department: string;
}
export interface Department {
  value: string;
  viewValue: string;
}

export interface Status {
  value: string;
  viewValue: string;
}

const BOOK_DATA: Book[] = [
  {
    position: 1,
    title: 'Hydrogen',
    department: 'Science',
    author: 'H',
    status: 'RTS',
    isbn: '0-7475-3269-9',
  },
  {
    position: 2,
    title: 'Helium',
    department: 'Math',
    author: 'He',
    status: 'Available',
    isbn: '0-7475-3269-9',
  },
  {
    position: 3,
    title: 'Lithium',
    department: 'Science',
    author: 'Li',
    status: 'Available',
    isbn: '0-7475-3269-9',
  },
  {
    position: 4,
    title: 'Beryllium',
    department: 'Math',
    author: 'Be',
    status: 'RTS',
    isbn: '0-7475-3269-9',
  },
  {
    position: 5,
    title: 'Boron',
    department: 'Science',
    author: 'Bet',
    status: 'Available',
    isbn: '0-7475-3269-9',
  },
  {
    position: 6,
    title: 'Carbon',
    department: 'Math',
    author: 'C',
    status: 'Available',
    isbn: '0-7475-3269-9',
  },
  {
    position: 7,
    title: 'Nitrogen',
    department: 'Science',
    author: 'N',
    status: 'RTS',
    isbn: '0-7475-3269-9',
  },
  {
    position: 8,
    title: 'Oxygen',
    department: 'Math',
    author: 'O',
    status: 'Available',
    isbn: '0-7475-3269-9',
  },
  {
    position: 9,
    title: 'Fluorine',
    department: 'Science',
    author: 'F',
    status: 'RTS',
    isbn: '0-7475-3269-9',
  },
  {
    position: 10,
    title: 'Neon',
    department: 'Math',
    author: 'Ne',
    status: 'Available',
    isbn: '0-7475-3269-9',
  },
];

@Component({
  selector: 'app-librarian-table',
  templateUrl: './librarian-table.component.html',
  styleUrls: ['./librarian-table.component.css'],
})
export class LibrarianTableComponent {
  displayedColumns: string[] = [
    'position',
    'title',
    'author',
    'isbn',
    'status',
    'department',
    'edit',
    'delete',
  ];
  departments: Department[] = [
    { value: 'All', viewValue: 'All' },
    { value: 'Science', viewValue: 'Science' },
    { value: 'Math', viewValue: 'Math' },
  ];

  status: Status[] = [
    { value: 'All', viewValue: 'All' },
    { value: 'Available', viewValue: 'Availabe' },
    { value: 'RTS', viewValue: 'RTS' },
  ];

  selectedDepartment = this.departments[0].value;
  dataSource = new MatTableDataSource(BOOK_DATA);

  applyFilter(event: String) {
    if (event == 'All') {
      this.dataSource = new MatTableDataSource(BOOK_DATA);
    } else {
      const filterValue = event;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
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
      return data.status.trim().toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterISBN(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.isbn.trim().toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRow(book: Book) {
    this.dataSource.data.splice(book.position - 1, 1);
    this.dataSource._updateChangeSubscription();
  }
}

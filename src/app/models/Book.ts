export class Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  isbn: number;
  bookStatus: string;
  condition: string;
  departments: string[];

  constructor(
    id: number,
    title: string,
    author: string,
    publisher: string,
    isbn: number,
    bookStatus: string,
    condition: string,
    departments: string[]
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.isbn = isbn;
    this.bookStatus = bookStatus;
    this.condition = condition;
    this.departments = departments;
  }
}

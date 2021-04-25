export class CheckOutBook {
  username: string;
  bookId: number;
  constructor(u: string, n: number) {
    this.username = u;
    this.bookId = n;
  }
}

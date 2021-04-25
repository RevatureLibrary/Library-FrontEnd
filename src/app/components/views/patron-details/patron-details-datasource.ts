import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Checkout } from 'src/app/models/Checkout';
import { map } from 'rxjs/operators';
import { merge, Observable, of as observableof } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { PatronDetailsService } from 'src/app/services/patron-details-service/patron-details.service';

// const CHECKOUT_DATA: Checkout[] = [
//     {id:1, checkoutDate: new Date("2020-02-16"), returnDueDate: new Date("2020-03-2"), 
//     book: {id:1, title:"Harry Potter", author:"JK Rowling", isbn:"12345687", publisher:"IDK", condition:"GOOD", bookStatus:"CHECKED_OUT", departments:["fiction"], compare: Book.prototype.compare},
//     checkoutStatus: "DUE" },
//     {id:2, checkoutDate: new Date("2020-01-15"), returnDueDate: new Date("2020-01-29"), 
//     book: {id:2, title:"Bible", author:"God", isbn:"12345687", publisher:"Heaven", condition:"GOOD", bookStatus:"CHECKED_OUT", departments:["fiction"], compare: Book.prototype.compare},
//     checkoutStatus: "DUE" }
// ]

export class PatronDetailsTableDataSource extends DataSource<Checkout>{
    data: Checkout[] = [];
    paginator: MatPaginator | undefined;
    sort: MatSort | undefined;
    
    constructor(private patronDetailsService:PatronDetailsService, private username:string){
        super();
        this.patronDetailsService.getAllCheckoutsByUserName(this.username).then(res => this.data = res);
        console.log(this.data);
    }


    connect(): Observable<Checkout[]>{
        if (this.paginator && this.sort) {
            // Combine everything that affects the rendered data into one update
            // stream for the data-table to consume.
            return merge(observableof(this.data), this.paginator.page, this.sort.sortChange)
              .pipe(map(() => {
                return this.getPagedData(this.getSortedData([...this.data ]));
              }));
          } else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
          }
    }

    disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
   private getPagedData(data: Checkout[]): Checkout[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Checkout[]): Checkout[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'checkoutDate': return compare(a.checkoutDate, b.checkoutDate, isAsc);
        case 'returnDueDate': return compare(+a.returnDueDate, +b.returnDueDate, isAsc);
        case 'book': return compare(a.book, b.book, isAsc);
        default: return 0;
      }
    });
  }

}

  /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
  function compare(a: string | number | Book | Date, b: string | number | Book | Date, isAsc: boolean): number {
    if(a.constructor === Book.constructor){
        // I have no idea if this actually works. If it doesn't check the Book Model
        a = new Book(a);
        b = new Book(b);
        return a.compare(b) * (isAsc ? 1 : -1);
    }
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
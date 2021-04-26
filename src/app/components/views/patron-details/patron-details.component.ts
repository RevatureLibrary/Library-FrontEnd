import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Checkout } from 'src/app/models/Checkout';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginService } from 'src/app/services/login-service/login.service';
import { PatronDetailsService } from 'src/app/services/patron-details-service/patron-details.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PatronDetailsTableDataSource } from './patron-details-datasource';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patron-details',
  templateUrl: './patron-details.component.html',
  styleUrls: ['./patron-details.component.css']
})



export class PatronDetailsComponent implements OnInit, AfterViewInit{
  public checkouts:Checkout[] = [];
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  username:string = '';
  activeUser:ActiveUser | null = LoginService.prototype.getActiveUser();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Checkout>;

  dataSource: PatronDetailsTableDataSource;

  displayedColumns = ['checkoutDate', 'returnDueDate', 'book', 'checkoutStatus', 'id'];

  constructor(private patronDetailsService:PatronDetailsService) {
  
    this.setUserDetails();
    this.dataSource = new PatronDetailsTableDataSource(this.patronDetailsService);
   }


  setUserDetails(): void{
    if(this.activeUser !== null){
      this.firstName = this.activeUser.firstName;
      this.lastName = this.activeUser.lastName;
      this.email = this.activeUser.email;
      this.username = this.activeUser.username;
    }
  }

  returnBook(checkout:Checkout):void{
    this.dataSource.returnBook(checkout);
    // this.dataSource.populate(this.username);
    // this.ngAfterViewInit();

    checkout.checkoutStatus = "RETURNED";
  }

  bookStatus(checkout:Checkout){
    if(checkout.checkoutStatus === "RETURNED"){
      return false;
    }
    return true;
  }

  formatDate(date:Date):void{
    // let day = date.getDay;
    // let month = date.getMonth;
    // let year = date.getFullYear;
    // let dayMonth = date.getDate;

    // let res:string;

    // let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // let week = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    // res = months[month] + " " + week[day] + dayMonth + year;
    // DatePipe.
  }

  ngOnInit(): void{
    // Need to populate datasource here
    this.dataSource.populate(this.username);
    this.table.dataSource = this.dataSource;
  }

  ngAfterViewInit(): void{
    // this.dataSource.populate(this.username);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}

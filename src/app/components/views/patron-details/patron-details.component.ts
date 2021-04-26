import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Checkout } from 'src/app/models/Checkout';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginService } from 'src/app/services/login-service/login.service';
import { PatronDetailsService } from 'src/app/services/patron-details-service/patron-details.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PatronDetailsTableDataSource } from './patron-details-datasource';
import * as moment from 'moment';


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

  displayedColumns = ['checkoutDate', 'returnDueDate', 'book', 'checkoutStatus'];

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

  dateFormat(date:Date): string{
    let mom = moment(date);
    return mom.format('MMM Do YYYY');
  }

  returnBook():void{
    // this.dataSource.data.splice()
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

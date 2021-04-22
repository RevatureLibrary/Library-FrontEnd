import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/models/Checkout';
import { PatronDetailsService } from 'src/app/services/patron-details.service';

@Component({
  selector: 'app-patron-details',
  templateUrl: './patron-details.component.html',
  styleUrls: ['./patron-details.component.css']
})



export class PatronDetailsComponent implements OnInit{
  public checkouts:Checkout[] = [];


  constructor(private patronDetailsService: PatronDetailsService) {  }

  ngOnInit(): void{
    this.patronDetailsService.getAllCheckoutsByUserName().subscribe(
      data => this.checkouts = data
    );
  }


}

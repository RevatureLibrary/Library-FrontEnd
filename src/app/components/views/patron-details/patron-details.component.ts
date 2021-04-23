import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/models/Checkout';
import { PatronDetailsService } from 'src/app/services/patron-details-service/patron-details.service';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-patron-details',
  templateUrl: './patron-details.component.html',
  styleUrls: ['./patron-details.component.css']
})



export class PatronDetailsComponent implements OnInit{
  public checkouts:Checkout[] = [];
  public firstName:string = "hrewr";
  public lastName:string = "asg";
  public username:string = "asgd";
  public email:string | undefined = "oaisjdg";


  constructor(private LoginService: LoginService) {  }

  ngOnInit(): void{
    // let activeUser:ActiveUser | null = this.patronDetailsService.getUserFromLocal();
    // if(activeUser !== null){
    //   this.firstName = activeUser.firstName;
    //   this.lastName = activeUser.lastName;
    //   this.username = activeUser.username;
    //   this.email = activeUser.email;
    // }
  }

 


}

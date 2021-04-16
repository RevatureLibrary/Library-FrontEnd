import { Component, OnInit } from '@angular/core';
import { JWT } from 'src/app/models/JWT';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  jwt:JWT ={token:"fake"};
  loginAttempt!:LoginAttempt;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.getToken(this.loginAttempt).subscribe(jtw =>{
      this.jwt = jtw;
    });
  }

}

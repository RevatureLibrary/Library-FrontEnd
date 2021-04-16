import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
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
  @Input() username?:string;
  @Input() password?:string;
  loginAttempt!:LoginAttempt;
  jtw?:Observable<any>;

  constructor(private loginService:LoginService) { }

  ngOnInit() {

  }

  submitLogin(username:string,password:string){
    this.username = "username"
    
        this.loginService.getToken(new LoginAttempt(username,password)).subscribe( jtw =>{
          this.jwt = jtw;
          console.log("signup");
          
        });
        let loginAttempt:LoginAttempt = new LoginAttempt(username,password);
        this.loginService.getToken(loginAttempt);
    
      }
}

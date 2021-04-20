import { Component, OnInit, Input} from '@angular/core';
import { from, Observable } from 'rxjs';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() username:string="admin";
  @Input() password:string= "pass";
 loginService:LoginService;
  user?: ActiveUser;

  isActive!:Boolean

  constructor(loginService:LoginService) {
    this.loginService = loginService;
   }

  ngOnInit(): void {
  }

  submitLogin(username: string,password: string){

    this.username = username;
    this.password = password;
    let ls:LoginAttempt = new LoginAttempt(this.username,this.password);
    let res:Observable<ActiveUser> = this.loginService.getToken(ls);
    res.subscribe(
       ((a)=>this.loginPass(a)),
       ((a)=>this.loginFail(a)),
       (()=>this.loginService.getToken));

    

  

  }
  loginPass( a: ActiveUser){
    this.user = a;
    alert("login success! token is user" + JSON.stringify(this.user));
    localStorage.setItem("user", JSON.stringify(this.user));
  //route to home
  }
  loginFail(a:any){
    alert("login failed")
    console.log("login failed");
    console.log(a);

  }



}

import { Component, OnInit, Input} from '@angular/core';
import { from, Observable } from 'rxjs';
import { JWT } from 'src/app/models/JWT';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() jwt!:JWT;
  @Input() username:string="admin";
  @Input() password:string= "pass";
 loginService:LoginService;

  constructor(loginService:LoginService) {
    this.loginService = loginService;
   }

  ngOnInit(): void {
  }

  onDelete(jwt:JWT){
    jwt.token = "";
    for(const I of [1,2,3]) console.log(I);

  }
  submitLogin(username: string,password: string){

    this.username = username;
    this.password = password;
    let ls:LoginAttempt = new LoginAttempt(this.username,this.password);
    let res:Observable<any> = this.loginService.getToken(ls);
    res.subscribe(
       ((a)=>this.loginPass(a)),
       ((a)=>this.loginFail(a)),
       (()=>this.loginService.getToken));

    

  

  }
  loginPass( a:any){
    this.jwt = a;
    alert("login success! token is {this.jwt}" + this.jwt.token)
    console.log(this.jwt);
  
  }
  loginFail(a:any){
    alert("login failed")
    console.log("login failed");
    console.log(a);

  }
}

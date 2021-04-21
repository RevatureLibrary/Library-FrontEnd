import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
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
  user?: ActiveUser;

  isActive!:Boolean

  constructor(
    private loginService:LoginService,
    private router: Router,
    ) {
    this.loginService = loginService;
   }

  ngOnInit(): void {
  }

  registerClick(){

    this.router.navigate(['sign-up'])
  }

  submitLogin(username: string,password: string){

    this.username = username;
    this.password = password;
    let ls:LoginAttempt = new LoginAttempt(this.username,this.password);
    let res:Observable<ActiveUser> = this.loginService.login(ls);
    res.subscribe(
       ((a)=>this.loginPass(a)),
       ((a)=>this.loginFail(a)),
       );
  }
  loginPass( a: ActiveUser){
    this.user = a;
    alert("login success! token is user" + JSON.stringify(this.user));
    this.router.navigate(['home'])
  //route to home
  }
  loginFail(a:any){
    alert("login failed")
    console.log("login failed");
    console.log(a);

  }



}

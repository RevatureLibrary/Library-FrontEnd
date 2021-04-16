import { Component, OnInit, Input} from '@angular/core';
import { from } from 'rxjs';
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
  @Input() username!:string;
  @Input() password!:string;

  constructor(loginService:LoginService) { }

  ngOnInit(): void {
  }

  onDelete(jwt:JWT){
    jwt.token = "";
  }
  submitLogin(username:string,password:string){

    let loginAttempt:LoginAttempt = new LoginAttempt(username,password);
    

  }

}

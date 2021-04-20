import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  @Input() username?:string;
  @Input() password?:string;
  loginAttempt!:LoginAttempt;
  jtw?:Observable<any>;

  constructor(private loginService:LoginService) { }

  ngOnInit() {

  }
}

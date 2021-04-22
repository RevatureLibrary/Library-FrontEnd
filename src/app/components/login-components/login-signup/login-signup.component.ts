import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveUser } from 'src/app/models/ActiveUser';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  @Input() username?: string;
  @Input() password?: string;
  loginAttempt!: LoginAttempt;
  jtw?: Observable<any>;
  returnClick() {
    this.router.navigate(['login']);
  }
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  submitSignUp(
    username: string,
    password: string,
    passCheck: string,
    fname: string,
    lname: string,
    email: string
  ) {
    let newUser = new ActiveUser();
    newUser.username = username;
    newUser.id = 0;
    if (passCheck == password) newUser.password = password;
    newUser.firstName = fname;
    newUser.lastName = lname;
    newUser.email = email;

    let success: Promise<ActiveUser> = this.loginService.signUp(newUser);
    if (success === null) alert('sign up failed');
    success.then(
      () => {
        localStorage.setItem('user', JSON.stringify(success));
        this.router.navigate(['']);
      },
      () => alert('sign up failed')
    );
  }
}

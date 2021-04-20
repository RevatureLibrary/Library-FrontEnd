import { Component, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { JWT } from 'src/app/models/JWT';
import { LoginAttempt } from 'src/app/models/LoginAttempt';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService
    ) {
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  
  get f() { return this.form.controls; }

  submitLogin(){
    this.submitted = true;

    this.alertService.clear();

    if (this.form.invalid) {
      return;
  }

  this.loading = true;
  this.loginService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
          next: () => {
              // get return url from query parameters or default to home page
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              alert("woo")
              this.router.navigateByUrl(returnUrl);
          },
          error: (error: any) => {
              this.alertService.error(error);
              this.loading = false;
          }
      });
}
}


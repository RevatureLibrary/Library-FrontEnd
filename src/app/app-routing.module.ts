import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { LoginSignupComponent } from './components/login-components/login-signup/login-signup.component';
import { LoginComponent } from './components/views/login/login.component';
import { SignupComponent } from './components/views/signup/signup.component';
import { UserHomeComponent } from './components/views/user-home/user-home.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';
import { LoginSignupComponent } from './components/login-components/login-signup/login-signup.component';
import { UserHomeComponent } from './components/views/user-home/user-home.component';
import { PatronDetailsComponent } from './components/views/patron-details/patron-details.component';

const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'sign-up', component: LoginSignupComponent },
  { path: '', component: LoginComponent },
  { path: 'userdetails', component: PatronDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent, LoginSignupComponent, UserHomeComponent,
  PatronDetailsComponent
]
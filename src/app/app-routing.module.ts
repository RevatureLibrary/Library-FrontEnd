import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { LoginSignupComponent } from './components/login-components/login-signup/login-signup.component';

const routes: Routes = [
  {path: 'home' , component:LoginFormComponent},
  {path: 'sign-up', component:LoginSignupComponent },
  {path: 'login' , component:LoginFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

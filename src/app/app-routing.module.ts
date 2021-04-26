import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { LoginSignupComponent } from './components/login-components/login-signup/login-signup.component';
import { LibrarianHomeComponent } from './components/views/librarian-home/librarian-home.component';
import { LoginComponent } from './components/views/login/login.component';
import { SignupComponent } from './components/views/signup/signup.component';
import { UserHomeComponent } from './components/views/user-home/user-home.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { PatronDetailsComponent } from './components/views/patron-details/patron-details.component'

const routes: Routes = [
  { path: 'home', component: UserHomeComponent },
  { path: 'home/:id', component: UserHomeComponent },
  { path: 'users', component: DeleteUserComponent },
  { path: 'userdetails', component: PatronDetailsComponent},
  { path: 'sign-up', component: SignupComponent },
  { path: '', component: LoginComponent },
  { path: 'librarian', component: LibrarianHomeComponent },
  
  { path: '**', redirectTo: '' }
  
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

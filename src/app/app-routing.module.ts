import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/subcomponents/navbar/navbar.component';
import { TableComponent } from './components/subcomponents/table/table.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { PatronDetailsComponent } from './components/views/patron-details/patron-details.component';

const routes: Routes = [
  {path: 'login', component: LoginSignupComponent},
  {path: 'signup', component: LoginSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginSignupComponent, NavbarComponent, PatronDetailsComponent]
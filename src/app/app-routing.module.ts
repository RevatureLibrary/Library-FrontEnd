import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/subcomponents/navbar/navbar.component';
import { TableComponent } from './components/subcomponents/table/table.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/subcomponents/sidebar/sidebar.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path: 'login', component: LoginSignupComponent},
  {path: 'signup', component: LoginSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginSignupComponent, NavbarComponent]
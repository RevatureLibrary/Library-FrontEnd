import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { TableComponent } from './components/table/table.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { LoginSignupComponent } from './components/login-components/login-signup/login-signup.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { LoginAuthTokenComponent } from './components/login-components/login-auth-token/login-auth-token.component';
import { LoginService } from './services/login.service';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    TableComponent,
    ToolbarComponent,
    SidebarComponent,
    CardsComponent,
    FormFieldComponent,
    LoginSignupComponent,
    MenuComponent,
    LoginFormComponent,
    LoginAuthTokenComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

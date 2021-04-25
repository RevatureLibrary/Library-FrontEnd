import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';

import { DeleteUserComponent } from './components/delete-user/delete-user.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginSignupComponent } from './components/login-components/login-signup/login-signup.component';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { LoginAuthTokenComponent } from './components/login-components/login-auth-token/login-auth-token.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { UserHomeComponent } from './components/views/user-home/user-home.component';
import { LibrarianHomeComponent } from './components/views/librarian-home/librarian-home.component';
import { TableComponent } from './components/subcomponents/table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './components/subcomponents/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LibrarianTableComponent } from './components/subcomponents/librarian-table/librarian-table.component';
import { ToolbarDirective } from './directives/toolbar.directive';
import { LoginComponent } from './components/views/login/login.component';
import { SignupComponent } from './components/views/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    UserHomeComponent,
    LibrarianHomeComponent,
    TableComponent,
    LoginSignupComponent,
    DeleteUserComponent,
    LoginFormComponent,
    LoginAuthTokenComponent,
    LibrarianTableComponent,
    NavbarComponent,
    ToolbarDirective,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

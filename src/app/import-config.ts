import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

import { TableComponent } from './components/subcomponents/table/table.component';
import { NavbarComponent } from './components/subcomponents/navbar/navbar.component';
import { LibrarianTableComponent } from './components/subcomponents/librarian-table/librarian-table.component';
import { LibrarianHomeComponent } from './components/views/librarian-home/librarian-home.component';
import { LoginAuthTokenComponent } from './components/login-components/login-auth-token/login-auth-token.component';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { LoginSignupComponent } from './components/login-components/login-signup/login-signup.component';


export const CONFIG = {
    "modules" : [
        BrowserModule, MatCardModule, MatButtonModule,
        MatToolbarModule, MatSelectModule,
        MatFormFieldModule, MatInputModule, MatIconModule,
        MatTableModule, BrowserAnimationsModule, MatSliderModule,
        HttpClientModule, MatSortModule, MatPaginatorModule
    ],
    "comps" :[
        TableComponent, NavbarComponent,
        LoginSignupComponent, LoginFormComponent, LibrarianHomeComponent,
        LoginAuthTokenComponent, LibrarianTableComponent
    ]
}
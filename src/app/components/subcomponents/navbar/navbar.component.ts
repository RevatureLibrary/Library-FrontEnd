import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveUser } from 'src/app/models/ActiveUser';

function checkLibrarian(): boolean {
  let user = localStorage.getItem('user');
  if (user != null) {
    let activeUser: ActiveUser = JSON.parse(user);

    console.log(activeUser.role);

    if (activeUser.role == 'ADMIN' || activeUser.role == 'LIBRARIAN') {
      return true;
    }
  }
  return false;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.isLibrarian = checkLibrarian();
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  routeToUserDetails(){
    this.router.navigate(['userdetails']);
  }

  isLibrarian = false;
  isUser = localStorage.getItem('user');

  isActiveLibrarian() {}
}

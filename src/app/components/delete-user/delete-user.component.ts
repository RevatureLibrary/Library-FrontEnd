import { Component, OnInit } from '@angular/core';
import { DeleteUserService } from 'src/app/services/delete-user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  displayedColumns: string[] = ["id", "username", "firstName", "lastName", "email", "created", "deleteButton"]; 
  users:User[] = [];

  constructor(private deleteUserService: DeleteUserService) { }

  ngOnInit(): void {
    this.deleteUserService.getAllUsers().subscribe(({
      next: res => this.users = res
    }));
  }

  deleteUser(user: User) {
    this.deleteUserService.deleteUser(user).subscribe({
      next: res => this.users = this.users.filter(user => user.id !== res.id)
    });
  }

  searchUser(username: string) {
    this.deleteUserService.searchUsers(username).subscribe({
      next: res => this.users = res
    });
  }
}

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  created: string;
  accountType: string;
}


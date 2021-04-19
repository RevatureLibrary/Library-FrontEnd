import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { DeleteUserService } from 'src/app/services/delete-user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users:User[] = [];

  constructor(private deleteUserService: DeleteUserService) { }

  ngOnInit(): void {
    this.deleteUserService.getAllUsers().subscribe({
      next: res => this.users = res
    });
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

import { Component, OnInit } from '@angular/core';
import { DeleteUserService } from 'src/app/services/delete-user.service';
import { ActiveUser } from '../../models/ActiveUser';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'username',
    'firstName',
    'lastName',
    'email',
    'created',
    'deleteButton',
  ];
  // users: User[] = [];
  users: ActiveUser[] = [];
  dataSource = new MatTableDataSource(this.users);

  constructor(private deleteUserService: DeleteUserService) {}

  ngOnInit(): void {
    this.deleteUserService.getAllUsers().subscribe({
      next: (res) => (this.users = res),
    });
    this.deleteUserService.getAllUsers().subscribe((response) => {
      this.users = response;
      this.dataSource = new MatTableDataSource(this.users);

      console.log(this.dataSource.data);
    });
  }

  deleteUser(id: number) {
    console.log(id);
    this.deleteUserService.deleteUser(id)
    .subscribe({
      next: (res) =>
        (this.users = this.users.filter((val) => val.id !== res.id)),
    });
  }

  searchUser(username: string) {
    this.deleteUserService.searchUsers(username).subscribe({
      next: (res) => (this.users = res),
    });
  }
}

// export interface User {
//   id: number;
//   username: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   created: string;
//   accountType: string;
// }

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
  randomString: string = "RANDOMSTRING";

  constructor(private deleteUserService: DeleteUserService) { }

  ngOnInit(): void {
    this.deleteUserService.getAllUsers().subscribe({
      next: res => this.users = res
    });
  }


}

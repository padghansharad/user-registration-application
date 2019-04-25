import { Component, OnInit, Inject } from '@angular/core';
import { UserData } from '../models/user';
import { UserService } from './../services/user.service';
import { MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: UserData[];
  user = new UserData();
  name: string;
  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.users = [];
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(users);

    });
  }
  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((users) => {
      alert('Successfully Deleted');
      this.getUsers();
    });
  }

  saveUserDetails(): void {
    this.userService.saveUserDetails(this.user)
      .subscribe(user => {
        alert('User Successfully Registered');
        this.getUsers();
      },
        () => {
          alert('User Registration Failed');
          this.getUsers();
        });

  }

  clearUserDetails(): void {
    this.user.name = undefined;
    this.user.address = undefined;
  }

  openDialog(userData): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: userData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }
}

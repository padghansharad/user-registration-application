import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../services/user.service';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService) { }
  ngOnInit() {
  }
  cancelUserUpdate(): void {
    this.dialogRef.close();
  }

  updateUserDetails(userData): void {
    this.userService.updateUserDetails(userData)
      .subscribe(User => {
        alert('User Successfully Updated');
        this.dialogRef.close();
      },
        () => {
          alert('Failed to Update User');
        });

  }
}

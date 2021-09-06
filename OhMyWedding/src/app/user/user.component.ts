import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  profile: any = [];
  username: string = '';
  email: string = '';
  phoneNumber: any;

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe((data) => {
      console.log(data);
      this.profile = data;
    });
  }
}

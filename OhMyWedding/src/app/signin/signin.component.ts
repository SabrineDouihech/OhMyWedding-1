import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private us: UserService, private router: Router) { }
  user: any;

  ngOnInit(): void {
  }
  saveUser(

    username: string,
    password: string

  ) {
    this.us.UserLogin(
      {
        username: username,
        password: password
      })
      .subscribe((result: any) => {
        this.user = result;

        this.us.user = this.user[0]["username"];

        this.router.navigateByUrl("/packages");
      })
  }
};

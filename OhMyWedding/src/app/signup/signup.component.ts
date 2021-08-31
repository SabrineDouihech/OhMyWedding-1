import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  insertUser(
    username: string,
    email: string,
    password: string,
    identitycard: any,
    phonenumber: any) {

    this.us.CreateUser(

      {
        username: username,
        eMail: email,
        password: password,
        identityCard: parseInt(identitycard),
        phoneNumber: parseInt(phonenumber)

      })
      .subscribe((data: any) => {

        console.log(data)
        alert('done')
      })
  }

}

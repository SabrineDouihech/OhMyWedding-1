import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  insertUser(username: any, email: any, password: any, identitycard: any, phonenumber: any) {

    this.us.CreateUser({ username: username, eMail: email, password: password, identityCard: identitycard, phoneNumber: phonenumber }).subscribe((data) => {
      alert('done')
    })
  }


}

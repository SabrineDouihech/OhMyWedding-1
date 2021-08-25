import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up2',
  templateUrl: './sign-up2.component.html',
  styleUrls: ['./sign-up2.component.css']
})
export class SignUp2Component implements OnInit {

  constructor(private us : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  insertUser(username:any,email:any,password:any,identitycard:any,phonenumber:any){
    this.us.CreateUser({username:username,eMail:email,password:password,identityCard:identitycard,phoneNumber:phonenumber}).subscribe((data)=>{
      alert('done')
    })
  }

}

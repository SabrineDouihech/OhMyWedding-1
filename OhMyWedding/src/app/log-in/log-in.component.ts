import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

   user : any ;
  constructor(private us : UserService, private router : Router) {}
  
  ngOnInit(): void {
    
  }

  saveUser(username : string, password : string){
  this.us.UserLogin({username:username, password:password}).subscribe((result:any)=>{
    this.user = result;
    console.log(this.user);
    alert("success")
  })

  }

   

}




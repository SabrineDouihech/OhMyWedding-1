import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private us: UserService) { }
  user : any 
  ngOnInit(): void {
    this.user = this.us.user
    console.log(this.user , this.us.user)
  }

}

import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  // user: any;
  ngOnInit(): void {
    // this.user = this.us.user;
    // console.log(this.user, this.us.user);
  }
}

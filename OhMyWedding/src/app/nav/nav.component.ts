import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}
  // user: any;
  ngOnInit(): void {
    // this.user = this.us.user;
    // console.log(this.user, this.us.user);
  }

  favlist() {
    this.router.navigateByUrl('/favorites');
  }
  homePage() {
    this.router.navigateByUrl('');
  }

  packageslist() {
    this.router.navigateByUrl('/packages');
  }

  aboutUs() {
    this.router.navigateByUrl('/aboutus');
  }
}

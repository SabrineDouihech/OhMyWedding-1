import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
// import { UserService } from '../user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  // user: any;
  ngOnInit(): void {
    // this.user = this.us.user;
    // console.log(this.user, this.us.user);
  }
  logOut() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/');
  }
}

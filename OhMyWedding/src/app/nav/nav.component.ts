import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
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
  logOut() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/');
  }
}

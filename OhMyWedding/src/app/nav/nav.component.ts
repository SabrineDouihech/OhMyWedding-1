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
  private roles: any = [];
  authority: string = '';
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  // user: any;
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every((role: string) => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    // this.user = this.us.user;
    // console.log(this.user, this.us.user);
  }
  logOut() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/');
  }
}

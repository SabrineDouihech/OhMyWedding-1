import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  dis() {
    this.router.navigateByUrl('/Sign-Up');
  }
  logIn() {
    this.router.navigateByUrl('/Log-in');
  }
  signup() {
    this.router.navigateByUrl('/Sign-Up');
  }
  homePage() {
    this.router.navigateByUrl('');
  }
  aboutUsHome() {
    this.router.navigateByUrl('/aboutus');
  }
}

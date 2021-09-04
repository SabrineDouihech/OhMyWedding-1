import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  foodlist() {
    this.router.navigateByUrl('/food');
  }

  invitationCardList() {
    this.router.navigateByUrl('/invitationcard');
  }

  carsList() {
    this.router.navigateByUrl('/carslist');
  }

  musicalBandList() {
    this.router.navigateByUrl('/musicalbandlist');
  }

  dressing() {
    this.router.navigateByUrl('/dressing');
  }
  hosts() {
    this.router.navigateByUrl('/hosts');
  }
  previousPage() {
    this.router.navigateByUrl('/packages');
  }
}

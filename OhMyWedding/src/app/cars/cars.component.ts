import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LuxuryCarsSercice } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  data: any = [];
  cars: any = [];

  brand: string = '';
  price: any;

  constructor(
    private luxurycarsSercice: LuxuryCarsSercice,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getSomeCars() {
    this.luxurycarsSercice.getCars().subscribe((data) => {
      this.cars = data;
    });
  }
}

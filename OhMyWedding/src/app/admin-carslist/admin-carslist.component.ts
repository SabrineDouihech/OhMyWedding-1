import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LuxuryCarsSercice } from "../cars.service";

@Component({
  selector: 'app-admin-carslist',
  templateUrl: './admin-carslist.component.html',
  styleUrls: ['./admin-carslist.component.css']
})
export class AdminCarslistComponent implements OnInit {

  constructor(private cs: LuxuryCarsSercice) { }
  mYdata: any = [];
  Cars: any = [];
  ngOnInit(): void {
    this.getCars()
  }


  getCars() {
    this.cs.getCars().subscribe((mYdata) => {
      this.Cars = mYdata
      console.log("dzzadzdazda", this.Cars);

    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dach',
  templateUrl: './admin-dach.component.html',
  styleUrls: ['./admin-dach.component.css'],
})
export class AdminDachComponent implements OnInit {
  packages: any = false;
  food: any = false;
  invitation: any = false;
  music: any = false;
  clothes: any = false;
  place: any = false;
  car: any = false;
  reservation: any = false;
  listofPack: any = false;

  constructor() {}

  ngOnInit(): void {}
  lp() {
    this.food = false;
    this.invitation = false;
    this.packages = false;
    this.music = false;
    this.clothes = false;
    this.place = false;
    this.car = false;
    this.reservation = false;
    this.listofPack = true;
  }
  f() {
    this.food = true;
    this.invitation = false;
    this.packages = false;
    this.music = false;
    this.clothes = false;
    this.place = false;
    this.car = false;
    this.reservation = false;
  }
  i() {
    this.food = false;
    this.invitation = true;
    this.packages = false;
    this.music = false;
    this.clothes = false;
    this.place = false;
    this.car = false;
    this.reservation = false;
  }
  p() {
    this.food = false;
    this.invitation = false;
    this.packages = true;
    this.music = false;
    this.clothes = false;
    this.place = false;
    this.car = false;
    this.reservation = false;
  }
  m() {
    this.food = false;
    this.invitation = false;
    this.packages = false;
    this.music = true;
    this.clothes = false;
    this.place = false;
    this.car = false;
    this.reservation = false;
  }
  c() {
    this.food = false;
    this.invitation = false;
    this.packages = false;
    this.music = false;
    this.clothes = true;
    this.place = false;
    this.car = false;
    this.reservation = false;
  }
  pl() {
    this.food = false;
    this.invitation = false;
    this.packages = false;
    this.music = false;
    this.clothes = false;
    this.place = true;
    this.car = false;
    this.reservation = false;
  }
  ca() {
    this.food = false;
    this.invitation = false;
    this.packages = false;
    this.music = false;
    this.clothes = false;
    this.place = false;
    this.car = true;
    this.reservation = false;
  }
  r() {
    this.food = false;
    this.invitation = false;
    this.packages = false;
    this.music = false;
    this.clothes = false;
    this.place = false;
    this.car = false;
    this.reservation = true;
  }
}

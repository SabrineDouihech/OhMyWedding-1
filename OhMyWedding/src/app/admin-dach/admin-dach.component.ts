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
  f() {
    this.food = true;
    this.invitation = false;
    this.packages = false;
    this.music = false;
    this.clothes = false;
    this.place = false;
    this.car = false;
    this.reservation = false;
    this.listofPack = false;
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
    this.listofPack = false;
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
    this.listofPack = false;
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
    this.listofPack = false;
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
    this.listofPack = false;
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
    this.listofPack = false;
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
    this.listofPack = false;
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
    this.listofPack = false;
  }
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
}

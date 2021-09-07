import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-packageslist',
  templateUrl: './admin-packageslist.component.html',
  styleUrls: ['./admin-packageslist.component.css'],
})
export class AdminPackageslistComponent implements OnInit {
  query = '';
  categories = ['food', 'band', 'host', 'clothes', 'cars', 'invitationCard'];
  selectedCategory = 'food';
  constructor() {}
  ngOnInit(): void {
    console.log(this.query);
  }
  print() {
    this.query = this.query;
    console.log(this.query);
  }
  onChange(deviceValue: any) {
    console.log(deviceValue.target.value);
  }
  onChange1(device: any) {
    console.log(device.target.value);
  }
  onClick() {
    console.table({ q: this.query, c: this.selectedCategory });
  }
}

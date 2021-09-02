import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-foodlist',
  templateUrl: './admin-foodlist.component.html',
  styleUrls: ['./admin-foodlist.component.css']
})
export class AdminFoodlistComponent implements OnInit {
  mYdata: any = [];
  Food: any = [];
  constructor() { }

  ngOnInit(): void {
  }



}

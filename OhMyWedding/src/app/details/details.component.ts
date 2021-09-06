import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: any = {};
  car: any = {};
  constructor(private detailsService: DetailsService, private router: Router) {}

  ngOnInit(): void {
    this.item = this.detailsService.selectedItem;
    this.car = this.detailsService.selectedItem;
  }
}

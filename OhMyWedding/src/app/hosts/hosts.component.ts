import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostsSercice } from '../hosts.service';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css'],
})
export class HostsComponent implements OnInit {
  data: any = [];
  hosts: any = [];

  price: any;
  safehosts: any = [];
  safeprice: any;
  initialValuePrice: any;
  constructor(
    private hostsSercice: HostsSercice,
    private router: Router,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.getSomeHosts();
  }
  getSomeHosts() {
    this.hostsSercice.gethosts().subscribe((data) => {
      this.hosts = data;
      this.safehosts = data;
      this.safeprice = data;
    });
  }

  showDetails(element: any) {
    this.detailsService.selectedItem = element;
    this.router.navigateByUrl('/details');
  }

  goBacktoCategories() {
    this.router.navigateByUrl('/categorieslist');
  }

  hostPrice() {
    var mock = [];
    for (var i = 0; i < this.hosts.length; i++) {
      if (
        this.hosts[i].price === this.price * 1 ||
        this.hosts[i].price < this.price * 1
      ) {
        mock.push(this.hosts[i]);
      }
    }
    this.hosts = mock;
  }

  searchforAHost() {
    this.hosts = this.safehosts;
    if (this.price) {
      this.hostPrice();
    }
  }
}

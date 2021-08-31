import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostsSercice } from '../hosts.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  data: any = [];
  hosts: any = [];

  price: any;

  constructor(private hostsSercice: HostsSercice,
    private router: Router) { }

  ngOnInit(): void {
  }
  getFood() {
    this.hostsSercice.gethosts().subscribe((data) => {
      this.hosts = data;
    });
  }

}

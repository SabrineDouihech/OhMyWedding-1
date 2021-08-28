import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostsSercice } from "../hosts.service";
@Component({
  selector: 'app-admin-wedding-setting',
  templateUrl: './admin-wedding-setting.component.html',
  styleUrls: ['./admin-wedding-setting.component.css']
})
export class AdminWeddingSettingComponent implements OnInit {

  constructor(private hs: HostsSercice) { }
  mYdata: any = [];
  Hostes: any = [];
  ngOnInit(): void {
    this.getHostes()
  }


  getHostes() {
    this.hs.gethosts().subscribe((mYdata) => {
      this.Hostes = mYdata
      console.log("dzzadzdazda", this.Hostes);

    })

  }
}

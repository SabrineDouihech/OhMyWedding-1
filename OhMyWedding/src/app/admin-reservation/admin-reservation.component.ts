import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from "../reservation.service"




@Component({
  selector: 'app-admin-reservation',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.css']
})
export class AdminReservationComponent implements OnInit {

  constructor(private rs: ReservationService) { }
  mYdata: any = [];
  reservation: any = [];
  ngOnInit(): void {
    this.getReservation()
  }


  getReservation() {
    this.rs.getReservation().subscribe((mYdata) => {
      this.reservation = mYdata
      console.log("dzzadzdazda", this.reservation);

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicalbandService } from '../musicalband.service';

@Component({
  selector: 'app-musical-band',
  templateUrl: './musical-band.component.html',
  styleUrls: ['./musical-band.component.css'],
})
export class MusicalBandComponent implements OnInit {
  data: any = [];
  musicalBand: any = [];

  bandtype: string = '';
  price: any;

  constructor(
    private musicalbandService: MusicalbandService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  getMusicalBand() {
    this.musicalbandService.getABand().subscribe((data) => {
      this.musicalBand = data;
    });
  }
}

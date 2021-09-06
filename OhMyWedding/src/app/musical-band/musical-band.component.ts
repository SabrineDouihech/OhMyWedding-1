import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicalbandService } from '../musicalband.service';
import { DetailsService } from '../details.service';
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
  safeband: any = [];
  safeprice: any = [];
  constructor(
    private musicalbandService: MusicalbandService,
    private router: Router,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.getBand();
  }

  getBand() {
    this.musicalbandService.getABand().subscribe((data) => {
      this.musicalBand = data;
      this.safeband = data;
      this.safeprice = data;
      console.log(data);
    });
  }

  showDetails(element: any) {
    this.detailsService.selectedItem = element;
    this.router.navigateByUrl('/details');
  }

  goBacktoCategories() {
    this.router.navigateByUrl('/categorieslist');
  }

  searchforMusicalBand() {
    this.musicalBand = this.safeband;
    if (this.bandtype && this.price) {
      this.bandType();
      this.musicalBandPrice();
    } else if (!this.bandtype && this.price) {
      this.musicalBandPrice();
    } else if (this.bandtype && !this.price) {
      this.bandType();
    } else if (!this.bandtype && !this.price) {
      this.musicalBand = this.safeband;
    }
  }
  bandType() {
    var mock = [];
    for (var i = 0; i < this.musicalBand.length; i++) {
      if (
        this.musicalBand[i].bandtype.toLocaleLowerCase() ===
        this.bandtype.toLocaleLowerCase()
      ) {
        mock.push(this.musicalBand[i]);
      }
    }
    this.musicalBand = mock;
  }

  musicalBandPrice() {
    var mock = [];
    for (var i = 0; i < this.musicalBand.length; i++) {
      if (
        this.musicalBand[i].price === this.price * 1 ||
        this.musicalBand[i].price < this.price * 1
      ) {
        mock.push(this.musicalBand[i]);
      }
    }
    this.musicalBand = mock;
  }

  searchforABand() {
    this.musicalBand = this.safeband;
    if (this.price) {
      this.musicalBandPrice();
    }
  }
}

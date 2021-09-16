import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: any = {};

  foodCategory: any = [];
  carCategory: any = [];
  cadInvitationCategory: any = [];
  DressingCategory: any = [];
  musicalBandCategory: any = [];
  hostCategory: any = [];

  constructor(
    private detailsService: DetailsService,
    private router: Router,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.item = this.detailsService.selectedItem;
    console.log(this.item);
  }

  // getACategoryfood(id: any) {
  //   this.detailsService.getOneFood(id).subscribe((data: any) => {
  //     this.foodCategory = data;
  //   });
  // }

  // getACategoryCar(id: any) {
  //   this.detailsService.getOneCar(id).subscribe((data) => {
  //     this.carCategory = data;
  //   });
  // }

  // getACategoryCadInvitation(id: any) {
  //   this.detailsService.getOneCadInvitation(id).subscribe((data) => {
  //     this.cadInvitationCategory = data;
  //   });
  // }

  // getACategoryDressing(id: any) {
  //   this.detailsService.getOneDressing(id).subscribe((data) => {
  //     this.DressingCategory = data;
  //   });
  // }

  // getACategoryMusicalBand(id: any) {
  //   this.detailsService.getOneMusicalBand(id).subscribe((data) => {
  //     this.musicalBandCategory = data;
  //   });
  // }
  // getACategoryHost(id: any) {
  //   this.detailsService.getOneHost(id).subscribe((data) => {
  //     this.hostCategory = data;
  //   });
  // }

  addAfavoriteDetails(itemId: number, type: string) {
    this.favoritesService
      .addtofavorites({ itemId, type })
      .subscribe((data) => {});
  }
}

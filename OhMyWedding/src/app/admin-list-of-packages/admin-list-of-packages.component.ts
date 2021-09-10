import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { LuxuryCarsSercice } from '../cars.service';
import { DressingService } from '../dressing.service';
import { HostsSercice } from '../hosts.service';
import { InvitationCardsService } from '../invitationcard.service';
import { MusicalbandService } from '../musicalband.service';
import { PackagesService } from '../packages.service';
@Component({
  selector: 'app-admin-list-of-packages',
  templateUrl: './admin-list-of-packages.component.html',
  styleUrls: ['./admin-list-of-packages.component.css'],
})
export class AdminListOfPackagesComponent implements OnInit {
  constructor(
    private packagesService: PackagesService,
    private foodService: FoodService,
    private luxuryCarsSercice: LuxuryCarsSercice,
    private dressingService: DressingService,
    private hostsSercice: HostsSercice,
    private invitationCardsService: InvitationCardsService,
    private musicalbandService: MusicalbandService
  ) {}
  myData: any = [];
  Packs: any = [];
  title: any = 'New Package';
  pack: any = '';
  packAddUpdate: any;
  image: any;

  foodQuery = '';
  dressQuery = '';
  carQuery = '';
  hostQuery = '';
  invitQuery = '';
  musicQuery = '';

  foods: any[] = [];
  cars: any[] = [];
  dresses: any[] = [];
  hosts: any[] = [];
  invitationcards: any[] = [];
  musicBands: any[] = [];

  selectedFood = '';
  selectedCar = '';
  selectedDress = '';
  selectedHost = '';
  selectedInvi = '';
  selectedMusic = '';

  ngOnInit(): void {
    this.getPacks();
    this.getFoods();
  }

  click(inn: any) {
    console.log(inn);
  }

  getFoods() {
    this.foodService.getSomeFood().subscribe((foods) => {
      this.foods = foods;
    });
  }

  getCars() {
    this.luxuryCarsSercice.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  getDress() {
    this.dressingService.getDressing().subscribe((dresses) => {
      this.dresses = dresses;
    });
  }
  getHosts() {
    this.hostsSercice.gethosts().subscribe((hosts) => {
      this.hosts = hosts;
    });
  }
  getInvi() {
    this.invitationCardsService
      .getSomeInvitationCards()
      .subscribe((invitationcards) => {
        this.invitationcards = invitationcards;
      });
  }
  getBand() {
    this.musicalbandService.getABand().subscribe((musicBands) => {
      this.musicBands = musicBands;
    });
  }
  // getFoods() {
  //   this.foodService.getSomeFood().subscribe((foods) => {
  //     this.foods = foods;
  //   });
  // }

  getPacks() {
    this.packagesService.getPackages().subscribe((myData) => {
      this.Packs = myData;
      console.log(this.Packs);
    });
  }

  insertAPack(myData: any = []) {
    this.packagesService.postPackages(myData).subscribe((data) => {
      alert('You Have New Pack');
      this.ngOnInit();
    });
  }
  imgUpload(img: any) {
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append('img', img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this.packagesService.uploadImg(formData).subscribe((resp: any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log('RESP====> ', resp['msg'].url);
      this.image = resp['msg'].url;
    });
  }
  deleteACar(id: string) {
    this.packagesService.deleteAPackage(id).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  openAdd() {
    this.image = '';
    this.title = 'New Package';
    this.pack = {};
    this.packAddUpdate = true;
  }
  // openUpdate(car: any) {
  //   this.image = '';
  //   this.title = 'Update Pac';
  //   this.pack = car;
  //   this.packAddUpdate = false;
  // }
}

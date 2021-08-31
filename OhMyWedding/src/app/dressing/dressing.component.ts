import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DressingService } from '../dressing.service';

@Component({
  selector: 'app-dressing',
  templateUrl: './dressing.component.html',
  styleUrls: ['./dressing.component.css']
})
export class DressingComponent implements OnInit {
  data: any = [];
  clothes: any = [];

  genre: string = '';
  price: any;
  constructor(private dressingService: DressingService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getWeddingDressing() {
    this.dressingService.getDressing().subscribe((data) => {
      this.clothes = data;
    });
  }

}

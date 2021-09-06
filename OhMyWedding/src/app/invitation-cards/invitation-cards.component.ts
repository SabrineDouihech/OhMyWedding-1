import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvitationCardsService } from '../invitationcard.service';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-invitation-cards',
  templateUrl: './invitation-cards.component.html',
  styleUrls: ['./invitation-cards.component.css'],
})
export class InvitationCardsComponent implements OnInit {
  data: any = [];
  cards: any = [];

  price: any;
  safecards: any;
  safeprice: any;
  constructor(
    private invitationcardsService: InvitationCardsService,
    private router: Router,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.invitationcardsService.getSomeInvitationCards().subscribe((data) => {
      this.cards = data;
      this.safecards = data;
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

  cardPrice() {
    var mock = [];
    for (var i = 0; i < this.cards.length; i++) {
      if (
        this.cards[i].price === this.price * 1 ||
        this.cards[i].price < this.price * 1
      ) {
        mock.push(this.cards[i]);
      }
    }
    this.cards = mock;
  }

  searchforACard() {
    this.cards = this.safecards;
    if (this.price) {
      this.cardPrice();
    }
  }
}

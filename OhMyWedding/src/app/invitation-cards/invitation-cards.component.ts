import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvitationCardsSercice } from '../invitationcard.service';
@Component({
  selector: 'app-invitation-cards',
  templateUrl: './invitation-cards.component.html',
  styleUrls: ['./invitation-cards.component.css']
})
export class InvitationCardsComponent implements OnInit {
  data: any = [];
  cards: any = [];

  price: any;
  constructor(private invitationcardsSercice: InvitationCardsSercice,
    private router: Router) { }

  ngOnInit(): void {
  }
  getInvitationCards() {
    this.invitationcardsSercice.getSomeInvitationCards().subscribe((data) => {
      this.cards = data;
     
    });
  }

}

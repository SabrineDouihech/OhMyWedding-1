import { Component, OnInit } from '@angular/core';
import { InvitationCardsSercice } from "../invitationcard.service"
@Component({
  selector: 'app-admin-invita-iioncardslist',
  templateUrl: './admin-invita-iioncardslist.component.html',
  styleUrls: ['./admin-invita-iioncardslist.component.css']
})
export class AdminInvitaIioncardslistComponent implements OnInit {

  constructor(private ics: InvitationCardsSercice) { }
  mYdata: any = [];
  InviCard: any = [];
  ngOnInit(): void {
    this.getInviCard()
  }


  getInviCard() {
    this.ics.getSomeInvitationCards().subscribe((mYdata) => {
      this.InviCard = mYdata
      console.log(this.InviCard);

    })
  }

}

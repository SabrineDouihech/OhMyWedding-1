import { Component, OnInit } from '@angular/core';
import { InvitationCardsService } from '../invitationcard.service';
@Component({
  selector: 'app-admin-invita-iioncardslist',
  templateUrl: './admin-invita-iioncardslist.component.html',
  styleUrls: ['./admin-invita-iioncardslist.component.css'],
})
export class AdminInvitaIioncardslistComponent implements OnInit {
  constructor(private ics: InvitationCardsService) {}
  mYdata: any[] = [];
  InviCard: any = [];
  title : any = "New Card"
  invicard :any = ""
  invicardAddUpdate : any
  image : any
  ngOnInit(): void {
    this.getInviInvicard();
  }

  getInviInvicard() {
    this.ics.getSomeInvitationCards().subscribe((mYdata) => {
      this.InviCard = mYdata;
      
    });
  }
  insertAInvicard(myData:any =[]) {
    this.ics.postCards(myData).subscribe((data) => {
      alert('You Have New Invitation Cards');
      this.ngOnInit();
    });

  }
  imgUpload(img:any) {
    // THE IMAGE NEED TO BE INSIDE A FORMDATA OBJECT
    // CREATE A VARIABLE TO BE AN INSTANCE OF FORMDATA
    var formData = new FormData();
    // WE APPEND AN OBJECT WITH KEY OF img AND A VALUE OF OUR IMAGE FILE
    formData.append("img", img.target.files[0]);
    // SENDING OUR FORMDATA TO SERVICE
    this.ics.uploadImg(formData).subscribe((resp:any) => {
      // WE NEED TO EXTRACT THE RESPONSE IMG.URL AND ASSIGN IT TO VARIABLE TO SEND IT TO BACKEND ON FORM SUBMIT
      console.log("RESP====> ", resp["msg"].url);
      this.image = resp["msg"].url;
    });
  }
  deleteAInvi(id:string) {
    this.ics.deleteCards(id).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }
  upsateInvi(id:string,daty:any){
    this.ics.uptCards(id,daty).subscribe((data) => {
      alert('done');
      this.ngOnInit();
    });
  }

  openAdd(){
   this.image = ""
   this.title = "New Card"
   this.invicard = {}
   this.invicardAddUpdate = true
  }
  openUpdate(invicard : any){
    this.image = ""
    this.title = "Update Card"
    this.invicard = invicard 
   this.invicardAddUpdate = false

  }
}

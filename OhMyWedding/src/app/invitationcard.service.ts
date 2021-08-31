import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class IvitationCardsSercice {

    constructor(private http: HttpClient) { }







    getSomeInvitationCards() {
        return this.http.get('http://localhost:3000/cards');
    }


}
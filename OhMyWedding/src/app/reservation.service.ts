import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ReservationService {

    constructor(private http: HttpClient) { }







    getReservation() {
        return this.http.get('http://localhost:3000/api/resrvation');
    }


}
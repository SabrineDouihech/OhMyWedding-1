import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HostsSercice {

    constructor(private http: HttpClient) { }







    gethosts() {
        return this.http.get('http://localhost:3000/hosts');
    }


}
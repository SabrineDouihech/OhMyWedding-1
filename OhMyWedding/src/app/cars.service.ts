import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LuxuryCarsSercice {

    constructor(private http: HttpClient) { }







    getCars() {
        return this.http.get('http://localhost:3000/api/cars');
    }
    postCars(data : any){
        return this.http.post('http://localhost:3000/api/cars',data);
    }
    deleteCars(id:string){
        return this.http.delete(`http://localhost:3000/api/cars/${id}`)
    }
    uptCars(id:string,data:any){
        return this.http.put(`http://localhost:3000/api/cars/${id}`,data)
    }
}
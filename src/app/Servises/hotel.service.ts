import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private api: ApiService) { }


  getHotels(){
    return this.api.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }

  getHotelById(id: number){
    return this.api.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  }



}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private api: ApiService) { }

  getAllRooms(){
    return this.api.get('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
  }

  filter(obj : any){
    return this.api.postApi('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', obj)
  }

  reset(obj : any){
    return this.api.postApi('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', obj)
  }

  booking(obj : any){
    return this.api.postApi('https://hotelbooking.stepprojects.ge/api/Booking', obj)

  }

  deleteBooking(id: number){
    return this.api.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`)
  }

}

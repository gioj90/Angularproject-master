import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../Servises/hotel.service';
import { Hotels } from '../Models/hotels';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(private rout: ActivatedRoute, private api: HotelService){
    this.rout.params.subscribe(id => {
      console.log(id["id"])
      this.hotelId = id["id"]
      this.getHotel(this.hotelId)
    })

  }

 getHotel(id: number){
  this.api.getHotelById(id).subscribe((resp:any) => {
    console.log(resp)
    this.singleHotel = resp
    console.log(this.singleHotel)
  })
 }


  hotelId! : number
  singleHotel: Hotels = new Hotels

}

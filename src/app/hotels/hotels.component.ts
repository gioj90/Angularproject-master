import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../Servises/api.service';
import { RouterModule } from '@angular/router';
import { Hotels } from '../Models/hotels';
import { HotelService } from '../Servises/hotel.service';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule, RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  constructor(private httpHotels: HotelService){}

  hotelsArr : Hotels[] = []

 
 
  ngOnInit(){
    this.httpHotels.getHotels().subscribe((resp : any) =>{
      console.log(resp)
      this.hotelsArr = resp
      this.displayHotels(resp)
    })
  }

  displayHotels(arr : Hotels[]){
    this.hotelsArr = arr
  }

}

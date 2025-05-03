import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HotelService } from '../Servises/hotel.service';
import { HotelId } from '../Models/hotels';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api: HotelService){}

  hotelById : HotelId[] = []

  // ngOnInit(){
  //   this.api.getHotels().subscribe((resp : any) =>{
  //     console.log(resp)
  //     this.hotelById = resp
  //     this.displayHotlId(resp)

  //   })

  //   displayHotlId(arr : HotelId[]){
  //     this.hotelById = arr
  //   }

  }





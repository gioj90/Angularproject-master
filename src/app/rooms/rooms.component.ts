import { Component } from '@angular/core';
import { RoomsService } from '../Servises/rooms.service';
import { Rooms } from '../Models/rooms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  constructor(private api: RoomsService){}

  roomsArr : Rooms [] = []
  roomType = 0
  priceFrom = 0
  priceTo = 0
  maxGUest = 1
  chekInDate = new Date
  chekOutDate = new Date



  ngOnInit(){
    this.api.getAllRooms().subscribe((resp : any) => {
      console.log(resp)
      this.roomsArr = resp
      console.log(this.roomsArr)
    })
  }

  filter(){
    this.api.filter({
      roomTypeId: this.roomType,
      priceFrom: this.priceFrom,
      priceTo: this.priceTo,
      maximumGuests: this.maxGUest,
      checkIn: this.chekInDate,
      checkOut: this.chekOutDate
    }).subscribe((resp : any) => {
      console.log(resp)
      this.roomsArr = resp
    })

  }

  reset(){
    this.roomType = 0,
    this.priceFrom = 0,
    this.priceTo = 0,
    this.maxGUest = 1,
    this.chekInDate = new Date,
    this.chekOutDate = new Date
    this.api.getAllRooms().subscribe((resp : any) => {
      console.log(resp)
      this.roomsArr = resp
      console.log(this.roomsArr)
    })
  }
  


}

import { Component } from '@angular/core';
import { ApiService } from '../Servises/api.service';
import { RoomsService } from '../Servises/rooms.service';

@Component({
  selector: 'app-booked-rooms',
  imports: [],
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.scss'
})
export class BookedRoomsComponent {
  constructor (private api: RoomsService){

  }


}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../Servises/rooms.service';

@Component({
  selector: 'app-booking-page',
  imports: [FormsModule],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.scss'
})
export class BookingPageComponent {
  constructor (private rout: ActivatedRoute, private api: RoomsService){
    this.rout.params.subscribe(data => {
      this.roomId = data["id"]
    } )

  }

  roomId = 0

  chekInDate = new Date
  chekOutDate = new Date
  CustomerName = ""
  CustomerTelPhone = ""


  book(){
    this.api.booking({
    roomID: this.roomId,
    checkInDate: this.chekInDate,
    checkOutDate: this.chekOutDate,
    totalPrice: 100,
    isConfirmed: true,
    customerName: this.CustomerName,
    customerId: "",
    customerPhone: this.CustomerTelPhone
    }).subscribe({
    next: (response) => {
 
      console.log('Response:', response);
    },
    error: (err) => {
      if (err.status === 200 && err.error && err.error.text) {
 
        const successMessage = err.error.text;
        const bookingIdMatch = successMessage.match(/Booking Id (\d+)/);
        const bookingId = bookingIdMatch ? bookingIdMatch[1] : 'unknown';
       
        console.log('Booking successful:', successMessage);
        alert(`დაჯავშნა წარმატებულია! ჯავშნის ID: ${bookingId}`);
      }
      else if (err.error && err.error.message) {
        console.error('დაჯავშნის შეცდომა:', err.error.message);
        alert('დაჯავშნის შეცდომა: ' + err.error.message);
      }
      else if (err.message) {
        console.error('დაჯავშნის შეცდომა:', err);
        alert('დაჯავშნის შეცდომა: ' + err.message);
      }
      else {
        console.error('Unknown error:', err);
        alert('მოხდა უცნობი შეცდომა');
      }
    }
  })
}

  
 


  // "id": 0,
  // "roomID": 0,
  // "checkInDate": "2025-05-01T10:36:29.696Z",
  // "checkOutDate": "2025-05-01T10:36:29.696Z",
  // "totalPrice": 0,
  // "isConfirmed": true,
  // "customerName": "string",
  // "customerId": "string",
  // "customerPhone": "string"
}

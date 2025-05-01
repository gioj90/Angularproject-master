

export class Hotels {
    id!: string;
    name?: string;
    city?:string;
    address?:string;
    featuredImage?:string;
}

export class HotelId {
    id!: string;
    name?: string;
    hotelId?: number;
    roomTypeId?: number;
    pricePerNight?: number;
    available?: boolean;
    maximumGuests?: number;
    bookedDates?: null;
    images?: string
}

// "id": 1,
// "name": "Premium Room",
// "hotelId": 1,
// "roomTypeId": 1,
// "pricePerNight": 199,
// "available": true,
// "maximumGuests": 3,
// "bookedDates": null,
// "images":
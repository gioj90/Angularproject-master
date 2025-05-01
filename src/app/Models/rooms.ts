
export class Rooms {
    id?: number;
    name?: string;
    hotelId?: number;
    pricePerNight?: number;
    maximumGuests?: number;
    roomTypeId?: number;
    bookedDates?: any;
    images?: Imige[]
}

export class Imige {
    id?:number;
    source?: string;
}




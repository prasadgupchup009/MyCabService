export interface Reservation {
    pickup: string;
    destination: string;
    pickup_date: Date;
    status: string;
    car_type: string;
    self_driven : boolean;
}
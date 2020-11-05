
import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { Reservation } from './reservation.interface'
import { InjectModel } from '@nestjs/mongoose';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationService {

  constructor(@InjectModel('Reservation') private reservationModel: Model<Reservation>) { }
  async create(createReservationDto: CreateReservationDto) {
    let createReservation = new this.reservationModel(createReservationDto);
    try {
      return await createReservation.save();
    } catch (error) {
      throw error;
    }
  }

  async getReservations() {
    try {
      return await this.reservationModel.find().exec();
    } catch (error) {
      throw error;
    }
  }
}

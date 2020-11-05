
import { Controller, Post, Body, UseGuards, ValidationPipe, Get, Patch, Param } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationService } from './reservation.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservation')
export class ReservationController {
    constructor(private reservationService: ReservationService) {
    }
    @Post()
    @UseGuards(AuthGuard())
    async create(@Body(ValidationPipe) createReservationDto: CreateReservationDto) {
        return await this.reservationService.create(createReservationDto);
    }
    @Get()
    @UseGuards(AuthGuard())
    async getReservations() {
        return await this.reservationService.getReservations();
    }
}
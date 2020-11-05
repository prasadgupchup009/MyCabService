import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service'
import { ResrvationSchema } from './reservation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Reservation', schema: ResrvationSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  exports: [ReservationService],
  controllers: [ReservationController],
  providers: [ReservationService]
})
export class ReservationModule {}
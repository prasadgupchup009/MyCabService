import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {ReservationModule} from './reservations/reservation.module'

@Module({
  imports: [
      AuthModule, 
      UsersModule,
      ReservationModule,
      MongooseModule.forRoot('mongodb+srv://DevCluster_user:DevCluster_user@devcluster.atfgk.mongodb.net/MYCab?retryWrites=true&w=majority'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
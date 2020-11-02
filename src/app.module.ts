import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
      AuthModule, 
      UsersModule,
      MongooseModule.forRoot('mongodb+srv://DevCluster_user:DevCluster_user@devcluster.atfgk.mongodb.net/MYCab?retryWrites=true&w=majority'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
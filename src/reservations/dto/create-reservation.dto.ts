import { IsString,IsNotEmpty, IsDate, IsEnum, IsDateString} from 'class-validator';
import {CarType} from '../enums/carType.enum';
import {Type } from "class-transformer";


export class CreateReservationDto {
@IsString()
@IsNotEmpty()
readonly pickup: string;

@IsString()
@IsNotEmpty()
readonly destination: string;

@Type(() => Date)
@IsDate()
readonly pickup_date: Date;

@IsEnum(CarType)
@IsNotEmpty()
readonly car_type: string;

}
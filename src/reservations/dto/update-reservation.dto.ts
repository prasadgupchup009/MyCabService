import { IsString, IsEnum} from 'class-validator';
import { Status } from '../enums/status.enum';

export class UpdateReservationDto {
    @IsString()
    @IsEnum(Status)
    readonly status: string;
    }
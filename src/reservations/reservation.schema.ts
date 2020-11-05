import * as mongoose from 'mongoose';
import {Status} from './enums/status.enum'
import { CarType } from './enums/carType.enum';
import { IsDate } from 'class-validator';


export const ResrvationSchema = new mongoose.Schema({
    pickup : {
        type: String,
        required :true
    },
    destination : {
        type: String,
        required :true
    },
    pickup_date: {
        type : Date,
        default:Date.now
    },
    status : {
        type: String,
        default : Status.pending
    },
    car_type : {
        type: String,
        required :true,     
    },
    self_driven : {
        type : Boolean,
        default:false
    }
});
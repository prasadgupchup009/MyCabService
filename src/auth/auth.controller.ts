import { Controller, Post, Body ,ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto'

@Controller('getToken')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post() 
    async login(@Body(ValidationPipe) loginUserDto: LoginUserDto){
        return await this.authService.validateUserByPassword(loginUserDto);
    }

}
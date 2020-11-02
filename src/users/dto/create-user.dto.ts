import { IsString, MaxLength, MinLength, Matches, IsEmail } from 'class-validator';
export class CreateUserDto {
@IsString()
@MinLength(4)
@MaxLength(20)
@IsEmail()
readonly email: string;

@IsString()
@MinLength(8, { message: 'Password is too short (8 characters min)' })
@MaxLength(20, { message: 'Password is too long (20 characters max)' })
@Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message: 'password too weak'})
readonly password: string;

readonly vendor : boolean;
}
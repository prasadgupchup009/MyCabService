import { IsString, MaxLength, MinLength, Matches, IsEmail } from 'class-validator';
export class LoginUserDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(8, { message: 'Incorrect Password)' })
    @MaxLength(20, { message: 'Incorrect Password' })
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: 'Incorrect Password' }) //Minimum eight characters, at least one letter, one number and one special character:
    readonly password: string;
    readonly vendor : boolean;
}

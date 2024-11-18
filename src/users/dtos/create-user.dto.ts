import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength ,Matches} from "class-validator"; 

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    firstName : string;

    @IsString()
    @IsOptional()
    lastName : string;
    
    @IsString()
    @IsNotEmpty()
    phone : string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message:
          'Minimum eight characters, at least one letter, one number and one special character',
      })
    password: string;
}
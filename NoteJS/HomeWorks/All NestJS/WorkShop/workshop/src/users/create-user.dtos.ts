import { IsEmail, IsString } from "class-validator";

export class createUserDto {
    @IsString()
    firstName:string

    @IsString()
    @IsEmail()
    email:string

    @IsString()
    password:string
}
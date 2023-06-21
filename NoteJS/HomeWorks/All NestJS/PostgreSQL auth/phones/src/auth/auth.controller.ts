import { Body, ClassSerializerInterceptor, Controller, Get, Post, Res, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dtos/create-user';
import { CredentialsDto } from './dtos/credentials.dtos';
import { response } from 'express';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/register')
    registerUser(@Body() userData: CreateUserDto){
        return this.authService.registerUser(userData)
    }
    @Post('/login')
    async loginUser(@Body() userData: CredentialsDto,@Res() response){
        const token = await this.authService.loginUser(userData);
        response.set('authorization', token);
        return response.json(token).sendStatus(200);
    }
}

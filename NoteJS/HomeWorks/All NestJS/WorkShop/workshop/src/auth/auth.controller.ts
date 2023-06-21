import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from 'src/users/create-user.dtos';
import { CredentialsDto } from './credentials.dtos';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/register')
    registerUser(@Body() data:createUserDto){
        return this.authService.registerUser(data)
    }

    @Post(`login`)
    async loginUser(@Body() credentials:CredentialsDto, @Res() response){
        const token = await this.authService.loginUser(credentials);
        response.set('authorization', token)
        console.log(token)
        return response.sendStatus(200);
    }
}

import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dtos';
import { CredentialsDto } from './credentials.dtos';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post(`register`)
     registerUser(@Body() data:CreateUserDto){
        return this.authService.registerUser(data)
    }
    @Post('/login')
    @HttpCode(200)
    async loginUser(@Body() credentials: CredentialsDto, @Res() response) {
      const token = await this.authService.loginUser(credentials);
      console.log(token)
      response.set('Authorization', token);
      return response.json(token).sendStatus(200);
    }

    
    
}

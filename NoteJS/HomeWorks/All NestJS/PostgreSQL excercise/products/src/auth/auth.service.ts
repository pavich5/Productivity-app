import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dtos';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CredentialsDto } from './credentials.dtos';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private authService: UsersService, private jwtService: JwtService) {}
 
    async registerUser(data:CreateUserDto){
        const user = await this.authService.findUserByEmail(data.email)
        if(user) throw new NotFoundException("email alredy exzist")
        const hashedPassword = await bcrypt.hash(data.password, 8);
        const newUser = await this.authService.createUser({...data, password: hashedPassword});
        return newUser
    }
    async loginUser(credentials:CredentialsDto){
        const user = await this.authService.findUserByEmail(credentials.email);
        if(!user) throw new NotFoundException("invalid credentials")
        const passCheck = await bcrypt.compare(credentials.password, user.password)
        if(!passCheck) throw new NotFoundException("invalid credentials")
        const { password, ...userWithoutPassword } = user;
        const token = await this.jwtService.signAsync(userWithoutPassword);
        return token;
    }
}

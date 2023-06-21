import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dtos/create-user';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { CredentialsDto } from './dtos/credentials.dtos';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,private jwtService: JwtService,) {}

    async registerUser(data: CreateUserDto) {
        const user = await this.userService.findUserByEmail(data.email);
        if (user) throw new BadRequestException('Email already exists');
        const hashedPassword = await bcrypt.hash(data.password, 8);
        const newUser = await this.userService.createUser({...data, password: hashedPassword});
        return newUser;
      }
      
    async loginUser(credentials:CredentialsDto){
        const user = await this.userService.findUserByEmail(credentials.email);
        if (!user) throw new UnauthorizedException('Invalid Credentials');
        const passwordCheck = await bcrypt.compare(credentials.password,user.password)
        if (!passwordCheck) throw new UnauthorizedException('Invalid Credentials');
        const {password,...UserWithoutPassword} = user;
        const token = await this.jwtService.signAsync(UserWithoutPassword);
        return token;
    }
}

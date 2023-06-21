import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/users/create-user.dtos';
import * as bcrypt from 'bcrypt'
import { CredentialsDto } from './credentials.dtos';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async registerUser(userData:createUserDto){
    const user = await this.usersService.findUserByEmail(userData.email);
    if(user) throw new BadRequestException("email alredy exzist");
    const hashedPassword = await bcrypt.hash(userData.password,8);
    userData.password = hashedPassword;
    await this.usersService.createUser(userData)
  }
  async loginUser(credentials:CredentialsDto){
    const user = await this.usersService.findUserByEmail(credentials.email);
    if(!user) throw new UnauthorizedException("invaid credentials");
    const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
    if(!isPasswordValid) throw new UnauthorizedException("invaid credentials");
    const{password,...userWithoutPassword} = user;
    const token = await this.jwtService.signAsync(userWithoutPassword);
    return token;
  }
}

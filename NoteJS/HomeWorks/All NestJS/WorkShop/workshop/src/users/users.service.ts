import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './create-user.dtos';

@Injectable()
export class UsersService {
    @InjectRepository(User) private usersRepo: Repository<User>

    async findUserById(id:string){
        const foundUser = await this.usersRepo.findOneBy({ id })
        if(!foundUser) throw new NotFoundException("user not found")
        return foundUser
    }

    async findUserByEmail(email:string){
        const foundUser = await this.usersRepo.findOneBy({ email })
        return foundUser
    }

    async createUser(userData:createUserDto){
       const newUser = this.usersRepo.create(userData)
       await this.usersRepo.save(newUser)
       return newUser;
    }
}

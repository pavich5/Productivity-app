import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dtos';

@Injectable()
export class UsersService {
    @InjectRepository(User) private usersRepo : Repository<User>

     getAllUsers(){
        return this.usersRepo.find({})
    }
    async findUserByID(id:string){
        const foundUser = await this.usersRepo.findOneBy({ id });
        if(!foundUser) throw new NotFoundException("no id found");
        return foundUser
    }
    async findUserByEmail(email:string){
        const foundUser = this.usersRepo.findOneBy({ email })
        return foundUser
    }
    async createUser(data:CreateUserDto){
        const newUser = await this.usersRepo.create(data);
        await this.usersRepo.save(newUser);
        return newUser
    }
}

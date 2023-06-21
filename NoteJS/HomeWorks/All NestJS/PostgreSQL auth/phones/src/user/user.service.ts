import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user';

@Injectable()
export class UserService {
    @InjectRepository(User) private userRepo: Repository<User>

      // 1. Find by id
      async findUserByID(id:string){
        const foundUser = await this.userRepo.findOneBy({ id })
        if(!foundUser) throw new NotFoundException("user with this id not found")
        return foundUser;
      }
    // 2. Find by email
    async findUserByEmail(email:string){
        const foundUser = await this.userRepo.findOneBy({ email });
        // if(!foundUser) throw new NotFoundException("user with this email not found")
        return foundUser

    }
    // 3. Create user
    async createUser(data:CreateUserDto){
        const newUser = await this.userRepo.create(data);
        await this.userRepo.save(newUser)
        return newUser;
    }
}

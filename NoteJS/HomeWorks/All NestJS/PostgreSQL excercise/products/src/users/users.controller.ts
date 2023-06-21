import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers()
    }
     @Get(`/:id`)
    async  getUsersByID(@Param(`id`) id:string){
        return this.usersService.findUserByID(id)
    }
}

import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyboard } from './keyboard.entity';
import { FindManyOptions,  MoreThan, Repository } from 'typeorm';
import { CreateKeyboardDto } from './dtos/create-keyboard.dto';
import { UpdateKeyboardDto } from './dtos/update-keyboard.dto';
import { KeyboardFilters } from './interfaces/filters.interface';

@Injectable()
export class KeyboardService {
    @InjectRepository(Keyboard) private KeyboardRepo : Repository<Keyboard>;

    findAllKeyboard(filters: KeyboardFilters){
        let filterConfig: FindManyOptions<Keyboard> = {};
        if(filters.title){
            filterConfig.where = {...filterConfig.where, title: filters.title } 
        }
        if(filters.price){
            filterConfig.order = {...filterConfig.order, price: `DESC` };
        }
        
        if(filters.Vid){
            filterConfig.where = {...filterConfig.where, Type:filters.Vid}
        }
        if(filters.inStock){
            filterConfig.where = {...filterConfig.where, stock: MoreThan(0)}
        }
        
        console.log(filterConfig)
        return this.KeyboardRepo.find(filterConfig);
    }
    async getKeyboardByID(id: number){
        const keyboard = await this.KeyboardRepo.findOneBy({ id });
        if(!keyboard) throw new NotFoundException("Keyboard with this id not found");
        return keyboard;
    }
    async createKeyboard(data:CreateKeyboardDto){
        const newKeyboard = await this.KeyboardRepo.create(data);
        await this.KeyboardRepo.save(newKeyboard);
        return newKeyboard
    }
    async updateKeyboard(data:UpdateKeyboardDto, id:number){
        const keyboard = await this.getKeyboardByID(id);
        Object.assign(keyboard,data);
        await this.KeyboardRepo.save(keyboard);
    }
    async deleteKeyboard(id:number){
        const keyboard = await this.getKeyboardByID(id);
        await this.KeyboardRepo.remove(keyboard);
    }
}

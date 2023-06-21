import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Phone } from './phone.entity';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';
import { CreatePhoneDto } from './dtos/create-phone.dtos';
import { updatePhoneDto } from './dtos/update-phone.dtos';
import { PhoneFilters } from './dtos/phone-filters.dtos';


@Injectable()
export class PhonesService {
    @InjectRepository(Phone) private phoneRepo:Repository<Phone>;

    findAllPhones(filters: PhoneFilters){
        const filterConfig:FindManyOptions<Phone> = {};

        if(filters.title){
            filterConfig.where = {... filterConfig.where, title:filters.title}
        }
        if(filters.inStock){
            filterConfig.where = {...filterConfig.where, stock:MoreThan(0)}
        }
        if(filters.orderBy){
            if(filters.orderBy === "stock") filterConfig.order = {stock: 'ASC'}
            if(filters.orderBy === "price") filterConfig.order = {price: 'ASC'}
        }
        return this.phoneRepo.find(filterConfig)
    }
    async getPhoneByID(id: number){
        const foundPhone = await this.phoneRepo.findOneBy({ id })
        if(!foundPhone) throw new NotFoundException("no phone with this id")
        return foundPhone
    }
    async createPhone(phoneData: CreatePhoneDto){
        const newPhone = this.phoneRepo.create(phoneData);
        await this.phoneRepo.save(newPhone);
        return newPhone;
    }
    async updatePhone(id:number, data:updatePhoneDto){
        const foundPhone = await this.getPhoneByID(id);
        Object.assign(foundPhone,data);
        await this.phoneRepo.save(foundPhone)
    }
    async deletePhone(id:number){
        const foundPhone = await this.getPhoneByID(id);
        await this.phoneRepo.remove(foundPhone)
    }
}

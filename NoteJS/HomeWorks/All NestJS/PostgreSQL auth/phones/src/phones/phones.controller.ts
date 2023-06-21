import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Patch, Post, Query, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dtos/create-phone.dtos';
import { updatePhoneDto } from './dtos/update-phone.dtos';
import { PhoneFilters } from './dtos/phone-filters.dtos';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('phones')
export class PhonesController {
    constructor(private phoneService: PhonesService){}

    @UseGuards(AuthGuard)
    @Get()
    getAllPhones(
        @Query('title') title: string,
        @Query('inStock') inStock: string,
        @Query('orderBy') orderBy: 'stock' | 'price'
    ){
        const filters: PhoneFilters = {
            title,
            inStock:!!inStock,
            orderBy
        }
        return this.phoneService.findAllPhones(filters)
    }
    @Get('/:id')
    getPhonesByID(@Param(`id`) id:string){
        return this.phoneService.getPhoneByID(Number(id))
    }
    @Post()
    createPhone(@Body() phoneData:CreatePhoneDto){
        return this.phoneService.createPhone(phoneData)
    }
    @Patch('/:id')
    updatePhone(@Param(`id`) id:string,@Body() phoneData:updatePhoneDto){
        return this.phoneService.updatePhone(Number(id),phoneData)
    }
    @Delete('/:id')
    deletePhone(@Param(`id`) id:string){
        return this.phoneService.deletePhone(Number(id))
    }
}

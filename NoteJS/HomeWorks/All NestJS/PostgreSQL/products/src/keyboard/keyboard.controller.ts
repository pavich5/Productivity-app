import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { KeyboardService } from './keyboard.service';
import { CreateKeyboardDto } from './dtos/create-keyboard.dto';
import { KeyboardFilters } from './interfaces/filters.interface';

@Controller('keyboard')
export class KeyboardController {
    constructor(private keyboardService : KeyboardService) {}

    @Get()
    getAllKeyboards(
        @Query(`title`) title:string,
        @Query(`inStock`) inStock:number,
        @Query(`price`) price:number,
        @Query(`Vid`) Vid:string,
    ){
        const filters: KeyboardFilters = {
            title,
            inStock: !!inStock,
            price,
            Vid
        }
        return this.keyboardService.findAllKeyboard(filters)
    }
    @Get(`/:id`)
    getKeyboardByID(@Param(`id`) id:string){
        return this.keyboardService.getKeyboardByID(Number(id))
    }
    @Post()
    createKeyboard(@Body() data:CreateKeyboardDto){
        return this.keyboardService.createKeyboard(data)
    }
    @Patch(`/:id`)
    updateKeyboard(@Body() data:CreateKeyboardDto,@Param(`id`) id:string){
        return this.keyboardService.updateKeyboard(data,Number(id))
    }
    @Delete(`/:id`)
    DeleteKeyboard(@Param(`id`) id:string){
        return this.keyboardService.deleteKeyboard(Number(id))
    }
}
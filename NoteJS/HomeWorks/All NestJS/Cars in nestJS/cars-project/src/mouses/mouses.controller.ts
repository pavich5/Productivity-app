import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MousesService } from './mouses.service';
import { MouseDto } from './dtos/createMouse.dto';
import { UpdateMouseDto } from './dtos/updateData.dto';

@Controller('mouses')
export class MousesController {
    constructor(private mouseService: MousesService){}

    @Get()
    GetAll(){
        return this.mouseService.getAllMouses()
    }
    @Get()
    GetByID(@Param(`id`) id:string){
        return this.GetByID(id);
    }
    @Post()
     createMouse(@Body() mouseData: MouseDto) {
      return this.mouseService.createMouse(mouseData);
    }
    @Patch(':id')
    async updateMouse(@Param('id') mouseID: string, @Body() updateData: UpdateMouseDto) {
      await this.mouseService.updateMouse(mouseID, updateData);
    }
    @Delete(':id')
    async Delete(@Param('id') mouseID: string) {
      await this.mouseService.delete(mouseID);
    }
    
    
}

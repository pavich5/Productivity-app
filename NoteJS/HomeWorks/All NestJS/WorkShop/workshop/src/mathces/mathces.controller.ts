import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MathcesService } from './mathces.service';
import { CreateMatchDto } from './create-match.dto';
import { UpdateMatchDto } from './update-match.dtos';

@Controller('mathces')
export class MathcesController {
    constructor(private matchesService: MathcesService) {}

    @Get()
    getAllManagers() {
      return this.matchesService.getAllMathces();
    }
  
    @Get(`/:id`)
    getManagerByID(@Param(`id`) id: string) {
      return this.matchesService.getMathceById(Number(id));
    }
    @Post()
    createManager(@Body() data: CreateMatchDto) {
      return this.matchesService.createMathc(data);
    }
    @Patch(`/:id`)
    updateManager(@Body() data: UpdateMatchDto, @Param(`id`) id: string) {
      return this.matchesService.updateMathc(Number(id), data);
    }
    @Delete(`/:id`)
    deleteManager(@Param(`id`) id: string) {
      return this.matchesService.deleteMathc(Number(id));
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDrinkDto } from './drinks/dtos/createDrink.dtos';
import { UpdateDrinkDto } from './drinks/dtos/update-drinks.dtos';

@Controller('drinks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllDrinks() {
    return this.appService.getAllDrinks();
  }

  @Get('/:id')
  getDrinkByID(@Param('id') id: string) {
    return this.appService.getDrinkbyID(id);
  }

  @Post()
  createDrink(@Body() drinkData: CreateDrinkDto) {
    return this.appService.createDrink(drinkData);
  }
  @Patch('/:id')
  updateDrink(@Body() drinkData: UpdateDrinkDto, @Param('id') id: string) {
    return this.appService.updateDrink(id, drinkData);
  }
  @Delete('/:id')
  DeleteDrink(@Param('id') id: string) {
    return this.appService.deleteDrink(id);
  }
}

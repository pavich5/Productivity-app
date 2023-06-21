import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  getAllCars(
    @Query('model') model?: string,
    @Query('Firma') Firma?: string,
    @Query('year') year?: string,
  ) {
    return this.carsService.getAllCars(model, Firma, year);
  }
  @Get('/:id')
  getCarByID(@Param('id') productId: string) {
    return this.carsService.getCarByID(productId);
  }
  @Post()
  createCar(@Body() carData: CreateCarDto) {
    return this.carsService.createCar(carData);
  }
  @Patch('/:id')
  updateCar(@Param('id') carID: string, @Body() carData: UpdateCarDto) {
    return this.carsService.updateCar(carID, carData);
  }
  @Delete()
  deleteAll() {
    return this.carsService.deleteAll();
  }
  @Delete('/:id')
  deleteCar(@Param('id') carID: string) {
    return this.carsService.deleteCar(carID);
  }
}

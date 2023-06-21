import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { DrinksModule } from './drinks/drinks.module';
import { MousesModule } from './mouses/mouses.module';

@Module({
  imports: [CarsModule, DrinksModule, MousesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

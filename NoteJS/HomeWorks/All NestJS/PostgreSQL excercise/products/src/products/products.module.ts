import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import {  Productss } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Productss]), UsersModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}

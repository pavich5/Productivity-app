import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProudct.dto';
import { ProductFilters } from './interfaces/product-filters.interfaces';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getAll(
        @Query('title') title: string,
        @Query('inStock') inStock: string,
        @Query('orderBy') orderBy: 'stock' | 'price'
    ){
        const filters: ProductFilters = {
            title,
            inStock: !!inStock,
            orderBy
        }
        return this.productsService.getAll(filters)
    }
    @Get('/:id')
  getProductById(@Param('id') productId: string) {
    return this.productsService.findProductById(Number(productId));
  }
  @Post()
  createProduct(@Body() data:CreateProductDto){
    return this.productsService.createProduct(data)
  }
  @Patch('/:id')
  updateProduct(@Param(`id`) id:string,@Body() data:UpdateProductDto){
    return this.productsService.updateProduct(Number(id),data)
  }
  @Delete('/:id')
  DeleteProduct(@Param(`id`) id:string){
    return this.productsService.DeleteProduct(Number(id))
  }
}

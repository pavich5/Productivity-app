import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product-dtos';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './filter.interface';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('Productss')
export class ProductsController {
    constructor(private productService: ProductsService){}

    @UseGuards(AuthGuard)
    @Get()
    GetAllProducts(
        @Query(`title`) title: string,
        @Query(`stock`) stock: number,
        @Query(`price`) price:number
    ){
        const filters:ProductFilters = {
            title,
            stock: !!stock,
            price
        }
        return this.productService.getAllProducts(filters)
    }

    @Get(`/:id`)
    getProductByID(@Param(`id`) id:string){
        return this.productService.getByID(Number(id))
    }
    @Post()
    createProduct(@Body() data:CreateProductDto){
        return this.productService.createProduct(data)
    }

    @Patch(`/:id`)
    updateProduct(@Body() data:UpdateProductDto,@Param(`id`) id:string){
        return this.productService.updateProduct(data,Number(id))
    }
    @Delete(`/:id`)
    deleteProduct(@Param(`id`) id:string){
        return this.productService.deleteProduct(Number(id))
    }

}

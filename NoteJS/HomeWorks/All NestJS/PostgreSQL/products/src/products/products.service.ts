import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';
import path from 'path';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProudct.dto';
import { ProductFilters } from './interfaces/product-filters.interfaces';

@Injectable()
export class ProductsService {
    @InjectRepository(Product) private productRepo: Repository<Product>;

    getAll(filters: ProductFilters){
        const filterConfig: FindManyOptions<Product> = {}
        if (filters.title)
        filterConfig.where = { ...filterConfig.where, title: filters.title };
  
      if (filters.inStock)
        filterConfig.where = { ...filterConfig.where, stock: MoreThan(0) };
  
      if (filters.orderBy) {
        if (filters.orderBy === 'stock') filterConfig.order = { stock: 'ASC' };
        if (filters.orderBy === 'price') filterConfig.order = { price: 'ASC' };
      }
        return this.productRepo.find({})
    }
    async findProductById(id: number) {
        const product = await this.productRepo.findOneBy({ id });
    
        if (!product) throw new NotFoundException('Product not found');
    
        return product;
      }
      async createProduct(productData:CreateProductDto){
        const newProduct = await this.productRepo.create(productData);
        await this.productRepo.save(newProduct);
        return newProduct
      }
      async updateProduct(id:number, productData:UpdateProductDto){
        const foundProduct = await this.findProductById(id);
        Object.assign(foundProduct,productData)
        await this.productRepo.save(foundProduct);
    }
    async DeleteProduct(id:number){
        const foundProduct = await this.findProductById(id);
        await this.productRepo.remove(foundProduct);
    }
}

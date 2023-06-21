import { Injectable, NotFoundException } from '@nestjs/common';
import { Productss } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, MoreThan, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product-dtos';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductFilters } from './filter.interface';

@Injectable()
export class ProductsService {
    @InjectRepository(Productss) private productRepo: Repository<Productss>

    getAllProducts(filters:ProductFilters){
        const filterConfig:FindManyOptions<Productss> = {};
        if(filters.title){
            filterConfig.where = {...filterConfig, title:filters.title}
        }
        if(filters.price){
            filterConfig.order = {price:"ASC"}
        }
        if(filters.stock){
            filterConfig.where = {...filterConfig.where, stock:MoreThan(0)}
        }
        return this.productRepo.find(filterConfig)
    }
    async getByID(id:number){
        const foundProduct = await this.productRepo.findOneBy({ id })
        if(!foundProduct) throw new NotFoundException("ID NOT FOUND");
        return foundProduct
    }
    async createProduct(data:CreateProductDto){
        const newProduct = this.productRepo.create(data);
        await this.productRepo.save(newProduct)
        return newProduct
    }
    async updateProduct(data:UpdateProductDto, id:number){
        const foundProduct = await this.productRepo.findOneBy({ id });
        Object.assign(foundProduct,data);
        await this.productRepo.save(foundProduct);
        return foundProduct;
    }
    async deleteProduct(id:number){
        const foundProduct = await this.getByID(id);
        await this.productRepo.remove(foundProduct);
    }
}

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';
import { ProductModule } from './product.module';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly ProductModel: Model<Product>){}

    async getProducts(): Promise<Product[]>{
       const products = await this.ProductModel.find();
        return products;
    };

   async getProduct(productId: String): Promise<Product>{
        const product = await this.ProductModel.findById(productId);
        return product;
    };
    
    async createProdcut(createProductDTO: CreateProductDTO): Promise<Product>{
       const product =  new this.ProductModel(createProductDTO);
       return await product.save();
    };

    async deleteProduct(productId: String): Promise<Product>{
        const delProduct = await this.ProductModel.findByIdAndDelete(productId);
        return delProduct;
    };

    async updateProduct(productId: String, createProductDTO: CreateProductDTO): Promise<Product>{
        const updtProduct = await this.ProductModel.findByIdAndUpdate(productId, createProductDTO, { new: true });
        return updtProduct;
    };
}

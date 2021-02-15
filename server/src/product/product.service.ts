import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product-schema';
import { Model } from 'mongoose'

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument> ) {
  }

  async getAll(): Promise<ProductDocument[]> {
     return this.productModel.find().exec();
  }

  async getById(id:string): Promise<ProductDocument> {
    return this.productModel.findById(id).exec();
  }

  async create(product: CreateProductDto): Promise<Product> {
    const prod = new this.productModel(product);
    return prod.save();
  }

  async remove(id): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update(id, data:CreateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id,data,{new:true});
  }


}
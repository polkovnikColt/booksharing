import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book,BookDocument } from './schemas/book-schema';
import { Model } from 'mongoose'

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument> ) {
  }

  async getAll(): Promise<BookDocument[]> {
     return this.bookModel.find().exec();
  }

  async getById(id:string): Promise<BookDocument> {
    return this.bookModel.findById(id).exec();
  }

  async create(product: CreateBookDto): Promise<Book> {
    const prod = new this.bookModel(product);
    return prod.save();
  }

  async remove(id): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id);
  }

  async update(id, data:any): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id,data,{new:true});
  }


}
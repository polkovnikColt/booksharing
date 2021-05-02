import { Injectable } from '@nestjs/common';
import {BookInterface} from "../../types/types";
import {getManager} from "typeorm/index";
import {Book} from "../../entity/book.entity";
import {CommonUser} from "../../entity/user.entity";

@Injectable()
export class BookService {

    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getAllBooks():Promise<BookInterface[]>{
        return await this.manager
            .createQueryBuilder()
            .select('book')
            .from(Book,'book')
            // .innerJoin(CommonUser, 'user')
            .getMany()
    }

    async getBookById(id:number):Promise<BookInterface[]>{
        return await this.manager.find(Book, {
            where:{
                user: id
            }
        });
    }

    async createBook(body:BookInterface):Promise<BookInterface>{
        return this.manager.insert(Book,body);
    }

    async deleteBook(id:number):Promise<BookInterface>{
        return this.manager.delete(Book,{id:id});
    }

    async updateBook(id:number,body:BookInterface):Promise<BookInterface>{
        return this.manager.update(Book,{id:id}, body);
    }
}
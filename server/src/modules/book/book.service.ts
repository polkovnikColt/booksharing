import {Injectable} from '@nestjs/common';
import {BookInterface} from "../../types/types";
import {getConnection, getManager} from "typeorm/index";
import {Book} from "../../entity/book.entity";
import {CommonUser} from "../../entity/user.entity";

@Injectable()
export class BookService {

    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getAllBooks(): Promise<BookInterface[]> {
        const books = await getConnection().manager.find(Book);
        const result: BookInterface[] = [];
        for (const book of books) {
            book.user = await getConnection()
                .createQueryBuilder()
                .relation(Book, "user")
                .of(book)
                .loadMany();
            result.push(book);
        }
        return result;
    }

    async getBookById(id: number): Promise<BookInterface[]> {
        return await this.manager.find(Book, {
            where: {
                user: id,
                isExchanged: false
            }
        });
    }

    async orderBooks(body):Promise<void> {
        await this.manager.update(Book, {id: body.bookGetId}, {isOrdered: true});
        await this.manager.update(Book, {id: body.bookSendId}, {isOrdered: true})
    }

    async disorderBooks(body):Promise<void> {
        await this.manager.update(Book, {id: body.bookGetId}, {isOrdered: false});
        await this.manager.update(Book, {id: body.bookSendId}, {isOrdered: false})
    }

    async createBook(body: BookInterface): Promise<BookInterface> {
        return this.manager.insert(Book, body);
    }

    async deleteBook(id: number): Promise<BookInterface> {
        return this.manager.delete(Book, {id: id});
    }

    async updateBook(id: number, body: BookInterface): Promise<BookInterface> {
        return this.manager.update(Book, {id: id}, body);
    }
}
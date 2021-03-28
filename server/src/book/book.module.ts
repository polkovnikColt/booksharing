import { Module } from '@nestjs/common';
import {BookController} from "../book/book.controller";
import {BookService} from "../book/book.service";
import {JwtShared} from "../auth/jwt/jwt.module";



@Module({
    imports: [JwtShared],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule {}
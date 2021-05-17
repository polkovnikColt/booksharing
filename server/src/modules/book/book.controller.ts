import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {BookService} from "./book.service";
import {BookInterface} from "../../types/types";
import {AuthGuard} from "@nestjs/passport";
import {Book} from "../../entity/book.entity";


@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }

    @Get()
    private getAllBooks(): Promise<BookInterface[]> {
        return this.bookService.getAllBooks();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    private getBookById(@Param('id')id): Promise<BookInterface[]> {
        return this.bookService.getBookById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    private addBook(@Req() req): Promise<BookInterface> {
        return this.bookService.createBook(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('order')
    private orderBooks(@Req() req): Promise<void> {
        return this.bookService.orderBooks(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('disorder')
    private disorderBook(@Req() req): Promise<void> {
        return this.bookService.disorderBooks(req.body);
    }


    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    private deleteBook(@Param('id') id): Promise<BookInterface> {
        return this.bookService.deleteBook(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    private updateBook(@Param('id') id, @Req() req): Promise<BookInterface> {
        return this.bookService.updateBook(id, req.body);
    }

}
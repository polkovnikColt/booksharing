import { Controller, Get} from '@nestjs/common';
import {BookService} from "../book/book.service";



@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('')
    getHello(): string {
        return 'Hello';
    }
}
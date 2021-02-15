import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put, Res,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookService } from './book.service';

@Controller('product')
export class BookController {
  constructor(private product: BookService) {}

  @Get()
  getProducts() {
    return this.product.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.product.getById(id);
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto, @Res() res){
    this.product.create(createBookDto);
    res.sendStatus(HttpStatus.CREATED);
  }

  @Delete(':id')
  remove(@Param('id') id) {
      return this.product.remove(id);
  }

  @Put(':id')
  update(@Param('id') id,@Body() body:CreateBookDto) {
    return this.update(id,body);
  }
}

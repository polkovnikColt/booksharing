import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put, Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private product: ProductService) {}

  @Get()
  getProducts() {
    return this.product.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return this.product.getById(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto,@Res() res){
    this.product.create(createProductDto);
    res.sendStatus(HttpStatus.CREATED);
  }

  @Delete(':id')
  remove(@Param('id') id) {
      return this.product.remove(id);
  }

  @Put(':id')
  update(@Param('id') id,@Body() body:CreateProductDto) {
    return this.update(id,body);
  }
}

import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return 'Hello';
  }
  @Get('bye')
  getBye(): string {
    return 'Bye';
  }
}

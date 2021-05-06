import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {MessageService} from "./message.service";

@Controller('preference')
export class MessageController {
    constructor(private readonly messageService: MessageService) {
    }


}
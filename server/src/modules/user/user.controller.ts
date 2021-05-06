import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserInterface} from "../../types/types";
import {AuthGuard} from "@nestjs/passport";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllUsers(): Promise<UserInterface[]> {
        return this.userService.getAllUser();
    }


    @UseGuards(AuthGuard('jwt'))
    @Put('order/:id')
    orderBook(@Param("id") id, @Req() req):Promise<void> {
        return this.userService.orderBook(id, req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('disorder/:id')
    disorderBook(@Param("id") id, @Req() req):Promise<void> {
        return this.userService.disorderBook(id,req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param("id") id): Promise<UserInterface> {
        return this.userService.deleteUser(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateUser(@Param(":id") id, @Req() req): Promise<UserInterface> {
        return this.userService.updateUser(id, req.body);
    }
}
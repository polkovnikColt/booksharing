import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserInterface} from "../../types/types";
import {AuthGuard} from "@nestjs/passport";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllUsers(): Promise<UserInterface[]> {
        return this.userService.getAllUser();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    orderBook(@Param("id") id) {
        return
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param("id") id):Promise<UserInterface>{
        return this.userService.deleteUser(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateUser(@Param(":id") id,@Req() req):Promise<UserInterface>{
        return this.userService.updateUser(id,req.body);
    }
}
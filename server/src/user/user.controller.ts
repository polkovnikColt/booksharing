import {Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserInterface} from "../types/types";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getAllUsers(): Promise<UserInterface[]> {
        return this.userService.getAllUser();
    }

    @Post()
    createUser(@Req() req):Promise<UserInterface>{
        return this.userService.createUser(req.body);
    }

    @Delete(':id')
    deleteUser(@Param("id") id):Promise<UserInterface>{
        return this.userService.deleteUser(id);
    }

    @Put(':id')
    updateUser(@Param(":id") id,@Req() req):Promise<UserInterface>{
        return this.userService.updateUser(id,req.body);
    }
}
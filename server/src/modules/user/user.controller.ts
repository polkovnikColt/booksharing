import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {UserService} from "./user.service";
import {OrderInterface, UserInterface} from "../../types/types";
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
    @Put('favorite/add')
    addToFavorite(@Req() req): Promise<void> {
        return this.userService.addToFavorite(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('favorite/delete')
    deleteFromFavorite(@Req() req): Promise<void> {
        return this.userService.deleteFromFavorite(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('order/all/')
    getAllUserOrders():Promise<OrderInterface[]> {
        return this.userService.loadAllOrders();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('order')
    orderBook(@Req() req): Promise<OrderInterface> {
        return this.userService.orderBook(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('order/:id')
    disorderBook(@Param("id") id): Promise<OrderInterface> {
        return this.userService.disorderBook(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('order/approve')
    approveOrder(@Req() req):Promise<OrderInterface>{
        return this.userService.approveOrder(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param("id") id): Promise<UserInterface> {
        return this.userService.deleteUser(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    updateUser(@Param("id") id, @Req() req): Promise<UserInterface> {
        return this.userService.updateUser(id, req.body);
    }
}
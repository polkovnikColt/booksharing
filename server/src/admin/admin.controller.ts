import {Controller, Delete, Param, Post, Req, UseGuards} from "@nestjs/common";
import {AdminService} from "./admin.service";
import {AdminInterface, BookInterface, UserInterface} from "../types/types";
import {AuthGuard} from "@nestjs/passport";

@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('book/:id')
    deleteBook(@Param('id') id): Promise<BookInterface> {
        return this.adminService.deleteBook(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('user/:id')
    deleteUser(@Param('id') id): Promise<UserInterface> {
        return this.adminService.deleteUser(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('create')
    createAdmin(@Param('id') id, @Req() req): Promise<AdminInterface> {
        return this.adminService.createAdmin(req.body);
    }
}
import {Controller, Delete, Param, Post, Req, UseGuards} from "@nestjs/common";
import {AdminService} from "./admin.service";
import {BookInterface, UserInterface} from "../../types/types";
import {AuthGuard} from "@nestjs/passport";

@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteUser(@Param('id') id):Promise<void> {
        return this.adminService.deleteUser(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteComment(@Param("id") id):Promise<void> {
        return this.adminService.deleteComment(id);
    }
}
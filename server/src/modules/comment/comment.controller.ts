import {Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {CommentService} from "./comment.service";
import {CommentInterface} from "../../types/types";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    addComment(@Req() req):Promise<CommentInterface> {
        console.log(req.body);
        return this.commentService.addComment(req.body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    getAllUsersComment(@Param("id") id):Promise<CommentInterface[]>{
        return this.commentService.getAllUsersComment(id);
    }
}
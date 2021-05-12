import { Module } from '@nestjs/common';
import {JwtShared} from "../auth/jwt/jwt.module";
import {CommentController} from "./comment.controller";
import {CommentService} from "./comment.service";


@Module({
    imports: [JwtShared],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule {}
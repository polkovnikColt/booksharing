import { Module } from '@nestjs/common';
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {JwtShared} from "../auth/jwt/jwt.module";


@Module({
    imports: [JwtShared],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
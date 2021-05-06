import { Module } from '@nestjs/common';
import {JwtShared} from "../auth/jwt/jwt.module";


@Module({
    imports: [JwtShared],
    controllers: [],
    providers: [],
})
export class MessageModule {}
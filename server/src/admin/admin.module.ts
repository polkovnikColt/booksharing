import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {AdminService} from "./admin.service";
import {AdminController} from "./admin.controller";
import {AdminMiddleware} from "../middleware/admin.middleware";

import {JwtShared} from "../auth/jwt/jwt.module";


@Module({
    providers:[AdminService],
    imports:[JwtShared],
    controllers:[AdminController]
})
export class AdminModule implements NestModule{
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(AdminMiddleware)
            .forRoutes(AdminController)
    }
}
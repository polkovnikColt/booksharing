import {Injectable, NestMiddleware} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Response, Request, NextFunction} from "express";
import {AdminService} from "../modules/admin/admin.service";

@Injectable()
export class AdminMiddleware implements NestMiddleware {

    constructor(private readonly jwt: JwtService,
                private readonly adminService: AdminService) {
    }

    async use(req: Request, res: Response, next: NextFunction) {
        // const token = req.headers.authorization.split(' ')[1];
        // const decoded = this.jwt.decode(token);
        // if (!(typeof decoded === "string")) {
        //     const candidate = await this.adminService.getAdminById(decoded.id);
        //     if(!candidate){
        //         throw new ForbiddenException();
        //     }
        //     req.body = candidate;
        // }
        next();
    }

}

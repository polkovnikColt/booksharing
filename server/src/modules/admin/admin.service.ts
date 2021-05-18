import {Injectable, UnprocessableEntityException} from "@nestjs/common";
import {getManager} from "typeorm/index";
import {Comment} from "../../entity/comment.entity";
import {CommonUser} from "../../entity/user.entity";


@Injectable()
export class AdminService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async deleteUser(id: number): Promise<void> {
        return await this.manager.delete(CommonUser,  {id: id});
    }

    async deleteComment(id: number): Promise<void> {
        return await this.manager.delete(Comment, {id: id});
    }

    async updateUserToAdmin(id:number):Promise<void> {
        return await this.manager.update(CommonUser, {id:id}, {role: 'admin'});
    }
}
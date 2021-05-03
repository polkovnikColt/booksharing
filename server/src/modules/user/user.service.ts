import {Injectable} from '@nestjs/common';
import {UserInterface} from "../../types/types";
import {getManager} from "typeorm";
import {CommonUser} from "../../entity/user.entity";

@Injectable()
export class UserService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getAllUser(): Promise<UserInterface[]> {
        return await this.manager
            .createQueryBuilder()
            .select('user')
            .from(CommonUser, 'user')
            .getMany();
    }

    async createUser(body: UserInterface): Promise<UserInterface> {
        return await this.manager
            .insert(CommonUser, body);
    }

    async deleteUser(id: number): Promise<UserInterface> {
        return await this.manager.delete(CommonUser, {id: id});
    }

    async updateUser(id: number, body): Promise<UserInterface> {
        return await this.manager.update(CommonUser, {id: id}, body);
    }

    async orderBook(id:number): Promise<void> {

    }
}

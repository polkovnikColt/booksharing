import {Injectable} from '@nestjs/common';
import {UserInterface} from "../types/types";
import {getManager} from "typeorm";
import {User} from "../entity/user.entity";

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
            .from(User, 'user')
            .getMany();
    }

    async createUser(body: UserInterface): Promise<UserInterface> {
        return await this.manager
            .insert(User, body);
    }

    async deleteUser(id: number): Promise<UserInterface> {
        return await this.manager.delete(User, {id: id});
    }

    async updateUser(id: number, body): Promise<UserInterface> {
        return await this.manager.update(User, {id: id}, body);
    }
}

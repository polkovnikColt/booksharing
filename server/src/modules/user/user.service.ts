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

    async orderBook (id:number, body:any):Promise<void> {
        const userGet = await this.manager.findOne(CommonUser, {
            where: {
                id:id
            }
        });
        const userSend = await this.manager.findOne(CommonUser, {
            where: {
                id: body.userGetId
            }
        });
        userGet.booksToGetId.push(body.bookId);
        userSend.booksToSendId.push(body.bookId);
       await this.manager.save(userGet);
       await this.manager.save(userSend);
    }

    async disorderBook (id:number, body:any):Promise<void> {
        const userGet = await this.manager.findOne(CommonUser, {
            where: {
                id: id
            }
        });
        const userSend = await this.manager.findOne(CommonUser, {
            where: {
                id: body.userGetId
            }
        });
        userGet.booksToGetId = userGet.booksToGetId.filter(id => id !== body.bookId);
        userSend.booksToSendId = userSend.booksToSendId.filter(id => id !== body.bookId);
        await this.manager.save(userGet);
        await this.manager.save(userSend);
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

}

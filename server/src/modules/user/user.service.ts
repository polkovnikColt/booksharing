import {BadRequestException, Injectable} from '@nestjs/common';
import {FavoriteInterface, OrderInterface, UserInterface} from "../../types/types";
import {getManager} from "typeorm";
import {CommonUser} from "../../entity/user.entity";
import {Order} from "../../entity/order.entity";
import {getConnection} from "typeorm/index";
import {Book} from "../../entity/book.entity";

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


    async deleteFromFavorite(body: FavoriteInterface): Promise<void> {
        const candidate: UserInterface = await this.manager.findOne(CommonUser, {
            where: {
                id: body.userId
            }
        });
        if (candidate) {
            candidate.favorite = candidate.favorite
                .filter(id => id !== body.bookId);

            await this.manager.save(candidate);
        } else {
            throw new BadRequestException();
        }
    }

    async addToFavorite(body: FavoriteInterface): Promise<void> {
        const candidate: UserInterface = await this.manager.findOne(CommonUser, {
            where: {
                id: body.userId
            }
        });
        if (candidate) {
            candidate.favorite.push(body.bookId);
            await this.manager.save(candidate);
        } else {
            throw new BadRequestException();
        }
    }

    async orderBook(body: OrderInterface): Promise<OrderInterface> {
        return this.manager.insert(Order, body);
    }

    async disorderBook(id: number): Promise<OrderInterface> {
        return this.manager.delete(Order, {id: id});
    }

    async approveOrder(body: OrderInterface): Promise<OrderInterface> {
        await this.manager.update(Book, {id: body.bookGetId}, {isExchanged: true});
        await this.manager.update(Book, {id: body.bookSendId},{isExchanged: true});
        return await this.manager.update(Order, {id: body.id}, {isFinished:true});
    }

    async loadAllOrders(): Promise<OrderInterface[]> {
        const orders = await this.manager.find(Order);
        const result: OrderInterface[] = [];
        for (const order of orders) {
            order.user = await getConnection()
                .createQueryBuilder()
                .relation(Order, "user")
                .of(order)
                .loadMany();
            result.push(order);
        }
        return result;
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

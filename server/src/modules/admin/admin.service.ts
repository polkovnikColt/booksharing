import {Injectable, UnprocessableEntityException} from "@nestjs/common";
import { getManager} from "typeorm/index";
import {AdminInterface, BookInterface, UserInterface} from "../../types/types";
import {CommonUser} from "../../entity/user.entity";
import {Book} from "../../entity/book.entity";

@Injectable()
export class AdminService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async getAdminById(id:number):Promise<AdminInterface>{
        return await this.manager.findOne(CommonUser,{id:id});
    }

    async deleteUser(id: number): Promise<UserInterface> {
        return await this.manager.delete(CommonUser, {id: id});
    }

    async deleteBook(id: number): Promise<BookInterface> {
        return await this.manager.delete(Book, {id: id});
    }

    async createAdmin(body:AdminInterface):Promise<AdminInterface>{
        const candidate:AdminInterface = await this.manager.findOne(CommonUser,{email:body.email});
        if(!candidate){
            await this.manager.insert(CommonUser,body);
            return body;
        }
        else{
            throw new UnprocessableEntityException();
        }
    }
}
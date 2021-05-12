import {Injectable} from '@nestjs/common';
import {getManager} from "typeorm";

@Injectable()
export class MessageService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async gelAllUserMessage(id:number):Promise<void> {

    }

}

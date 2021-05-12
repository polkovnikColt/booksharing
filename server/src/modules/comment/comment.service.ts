import {Injectable} from '@nestjs/common';
import {getManager} from "typeorm";
import {CommentInterface} from "../../types/types";
import {Comment} from "../../entity/comment.entity";
import {getConnection} from "typeorm/index";
import {Book} from "../../entity/book.entity";

@Injectable()
export class CommentService {
    private readonly manager;

    constructor() {
        this.manager = getManager();
    }

    async addComment(body: CommentInterface): Promise<CommentInterface> {
        return await this.manager.insert(Comment, body)
    }

    async getAllUsersComment(id: number): Promise<CommentInterface[]> {
        const comments = await this.manager.find(Comment, {
            where: {
                to: id
            }
        });
        // const comments = await this.manager.find(Comment);
        console.log(comments)
        const result:CommentInterface[] = [];
        for (const comment of comments) {
          comment.user = await getConnection()
               .createQueryBuilder()
               .relation(Comment, "user")
               .of(comment)
               .loadMany();
           result.push(comment);
        }
        return result;
    }

}
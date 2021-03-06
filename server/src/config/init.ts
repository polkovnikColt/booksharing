import {Connection, createConnection} from "typeorm/index";
import {CommonUser} from "../entity/user.entity";
import {Book} from "../entity/book.entity";
import {Preference} from "../entity/preference.entity";
import {Comment} from "../entity/comment.entity";
import {Order} from "../entity/order.entity";

export const init = async (): Promise<void> => {

    const conn: Connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "root",
        database: "booksharing",
        entities: [CommonUser, Book, Preference, Comment, Order],
        synchronize: true,
    });

    if (!conn.isConnected) {
        throw new Error("Cannot connect to database");
    }

}
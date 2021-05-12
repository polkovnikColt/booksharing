import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {CommonUser} from "./user.entity";


@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    to: number

    @Column()
    bookId: number

    @ManyToOne(type => CommonUser, user => user.orders)
    user: CommonUser

}
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {CommonUser} from "./user.entity";


@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    to: number

    @ManyToOne(type => CommonUser, user => user.messages)
    user: CommonUser
}

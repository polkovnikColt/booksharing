import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {CommonUser} from "./user.entity";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    author: string

    @Column()
    genre: string

    @Column()
    description: string

    @Column()
    views: number

    @ManyToOne(type => CommonUser, user => user.books)
    user: CommonUser


}
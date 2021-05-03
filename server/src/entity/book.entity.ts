import {Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn} from "typeorm/index";
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
    ownerName:string

    @Column({default:""})
    preview:string

    @Column()
    description: string

    @Column()
    views: number

    @ManyToOne(type => CommonUser, user => user.books,
        {onDelete:"CASCADE"})
    // @JoinColumn({ referencedColumnName: "user_id" })
    user: CommonUser


}
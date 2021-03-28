import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm/index";
import {Book} from "./book.entity";


@Entity()
export class CommonUser{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    booksToGetId:number[]

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    booksToSendId:number[]

    @OneToMany(type => Book,book => book.user)
    books:Book[]

}
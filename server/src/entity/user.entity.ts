import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm/index";
import {Book} from "./book.entity";


@Entity()
export class CommonUser{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    name:string

    @Column({default:""})
    avatar:string

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    booksToGetId:number[]

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    booksToSendId:number[]

    @OneToMany(type => Book,book => book.commonUser,
        {cascade:true})
    books:Book[]

}
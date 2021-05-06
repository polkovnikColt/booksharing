import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {Book} from "./book.entity";
import {Message} from "./message.entity";
import {Preference} from "./preference.entity";


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

    @Column({default:""})
    phone:string

    @Column({default:""})
    city:string

    @Column({default: ""})
    info:string

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    booksToGetId:number[]

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    booksToSendId:number[]

    @OneToMany(type => Book,book => book.user,
        {cascade:true})
    books:Book[]

    @OneToOne(() => Preference, preference => preference.user)
    preference: Preference

    @OneToMany( type => Message, message => message.user)
    messages: Message[]

}
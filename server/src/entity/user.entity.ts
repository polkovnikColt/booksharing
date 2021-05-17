import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {Book} from "./book.entity";
import {Preference} from "./preference.entity";
import {Comment} from "./comment.entity";
import {Order} from "./order.entity";

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
    phoneNumber:string

    @Column({default:""})
    social:string

    @Column({default:""})
    city:string

    @Column({default: ""})
    info:string

    @Column({default: "user"})
    role:string

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    favorite:number[]

    @OneToMany(type => Book,book => book.user,
        {cascade:true})
    books:Book[]

    @OneToMany(type => Comment,
            comment => comment.user,
        {cascade:true})
    comments: Comment[]

    @OneToMany(type => Order, order => order.user)
    orders:Order[]

    @OneToOne(() => Preference, preference => preference.user)
    preference: Preference


}
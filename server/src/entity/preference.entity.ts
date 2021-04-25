import {Column, OneToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {CommonUser} from "./user.entity";

export class Preference{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'string', default:''})
    genre:string

    @Column({type:'string', default:''})
    author: string

    @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    usersId: number

    @OneToOne(() => CommonUser)
    user: CommonUser
}
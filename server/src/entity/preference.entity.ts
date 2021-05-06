import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {CommonUser} from "./user.entity";

@Entity()
export class Preference{
    @PrimaryGeneratedColumn()
    id:number

    @Column( "text",{ array: true,default: ()=>'array[]::text[]'} )
    genre:string[]

    @Column( "text",{ array: true,default: ()=>'array[]::text[]'})
    author: string[]

    // @Column("int", { array: true,default: ()=>'array[]::integer[]'})
    // usersId: number

    @OneToOne(() => CommonUser, user => user.preference)
    user: CommonUser
}
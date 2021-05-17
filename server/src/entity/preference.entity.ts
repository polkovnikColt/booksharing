import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm/index";
import {CommonUser} from "./user.entity";

@Entity()
export class Preference{
    @PrimaryGeneratedColumn()
    id:number

    @Column( {type:'text', array:true, default:() => "array[]::text[]"})
    genre:string[]

    @Column( {type:'text', array:true,default:() => "array[]::text[]"})
    author: string[]

    @Column()
    user: number
}
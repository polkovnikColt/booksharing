import {Column, Entity, PrimaryGeneratedColumn} from "typeorm/index";

@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    role:string


}
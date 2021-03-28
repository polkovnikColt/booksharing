import {Column, Entity, PrimaryGeneratedColumn} from "typeorm/index";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    author:string

    @Column()
    genre:string

    @Column()
    description:string

    @Column()
    views:number


}
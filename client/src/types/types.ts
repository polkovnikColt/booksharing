import {Component, ForwardRefExoticComponent} from "react";

export type UserState = {
    credentials: UserInterface
    books: BookInterface[]
    comments:CommentInterface[]
    allBooks: BookInterface[]
    allUsers: UserInterface[]
}

export interface CommentInterface {
    id:number
    text:string
    to:number
    user:UserInterface
}

export interface LinkInterface {
    title: string,
    href: string,
    icon?: any
}

export interface CardInterface {
    title: string,
    body: string,
    avatar?: any
}

export interface BookInterface{
    id:number,
    user:any ,
    preview?:string,
    name:string,
    author:string,
    genre:string,
    isOrdered: boolean,
    description:string,
    views:number
}

export interface UserInterface {
    id:number,
    name: string,
    avatar?: string,
    city?:string,
    phoneNumber?:string,
    info?:string,
    email:string,
    password:string,
    favorite:number[]
    // booksToGetId?:number[],
    // booksToSendId?:number[],
    role:string
}

export interface FavoriteInterface {
    userId: number
    bookId: number
}

export type ToolsState = {
    loading: boolean
    main:boolean
}

export interface FormDataInterface{
    label:string,
    name:string,
    message?:string,
    inputComponent: typeof Component | ForwardRefExoticComponent<any>
}

export interface OrderBookInterface {
    userId: number
    bookId: number
    userGetId: number
    views?:number
}
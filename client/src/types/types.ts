import {Component, ForwardRefExoticComponent} from "react";

export type UserState = {
    credentials: UserInterface
    books: BookInterface[]
    allBooks: BookInterface[]
    allUsers: UserInterface[]
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
    user:number,
    preview?:string,
    name:string,
    ownerName:string
    author:string,
    genre:string,
    description:string,
    views:number
}

export interface UserInterface {
    id:number,
    name: string,
    avatar?: string,
    email:string,
    password:string,
    booksToGetId?:number[],
    booksToSendId?:number[],
    role:string
}

export type ToolsState = {
    loading: boolean
}

export interface FormDataInterface{
    label:string,
    name:string,
    message?:string,
    inputComponent: typeof Component | ForwardRefExoticComponent<any>
}
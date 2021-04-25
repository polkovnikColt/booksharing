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
    photo?:string,
    name:string,
    author:string,
    genre:string,
    description:string,
    views:number
}

export interface UserInterface {
    id:number,
    userName: string,
    photo: string,
    email:string,
    password:string,
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
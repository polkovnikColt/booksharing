
export interface UserInterface {
    id:number,
    email:string,
    password:string,
    booksToGetId:number[],
    booksToSendId:number[]
}

export interface AdminInterface {
    id:number,
    email:string,
    password:string,
}

export interface BookInterface{
    id:number
    name:string
    author:string
    description:string
    views:number
}

export type LoginResponseType = {
    token: string,
    user: UserInterface,
}
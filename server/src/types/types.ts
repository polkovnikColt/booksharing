
export interface UserInterface {
    id:number,
    email:string,
    password:string,
    name:string,
    avatar:string,
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
    commonUser:number
    name:string
    author:string
    preview:string
    ownerName:string
    description:string
    views:number
}

export type LoginResponseType = {
    token: string,
    user: UserInterface,
}
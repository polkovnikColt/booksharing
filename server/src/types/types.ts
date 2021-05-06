
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

export interface UserToBookInterface {
    id:number,
    email:string,
    name:string,
    avatar:string,
}

export interface BookInterface{
    id:number
    user: UserToBookInterface | null
    name:string
    author:string
    preview:string
    description:string
    views:number
}

export interface PreferenceInterface {
    id: number,
    genre: string[]
    author: string[]
    user: UserInterface
}

export type LoginResponseType = {
    token: string,
    user: UserInterface,
}

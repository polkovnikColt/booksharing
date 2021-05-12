
export interface UserInterface {
    id:number,
    email:string,
    password:string,
    name:string,
    avatar?:string,
    phoneNumber?:string
    favorite: number[]
    // booksToGetId:number[],
    // booksToSendId:number[]
}

export interface FavoriteInterface {
    userId: number
    bookId: number
}

export interface CommentInterface {
    id:number
    text:string
    to:number
    user: UserInterface
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

export interface PreferenceInputInterface {
    genre: string
    author: string
    user: UserInterface
}

export interface OrderInterface {
    to:number
    bookId:number
    user:UserInterface
}

export type LoginResponseType = {
    token: string,
    user: UserInterface,
}

export interface MessageInterface {
    text:string,

}

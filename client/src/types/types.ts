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

export interface UserInfoProps {
    name:string,
    bookName:string,
    profileInfo:{
        city:string,
        toBeReturn: boolean,
        date:Date
    }
}
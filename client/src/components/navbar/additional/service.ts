import {LinkInterface} from "../../../types/types";
import {UserState} from "../../../types/types";


export const getLinks = (user: UserState ): LinkInterface[] => {
    if (!!user.credentials) {
        if(user.credentials.role === 'admin'){
            return [
                {title: "Головна", href: "/"},
                {title: "Книги", href: "/books"},
                {title: "Кабінет", href: "/user"},
                {title: "Адміністратор", href: "/admin"},
            ]
        }
        return [
            {title: "Головна", href: "/"},
            {title: "Книги", href: "/books"},
            {title: "Кабінет", href: "/user"}
        ]
    }
    return [
        {title: "Головна", href: "/"},
        {title: "Книги", href: "/books"},
    ]
}
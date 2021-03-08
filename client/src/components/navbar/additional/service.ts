import {LinkInterface} from "../../../types/types";

export function getLinks(): LinkInterface[]{
    return [
        {title:"Головна",href:"/"},
        {title:"Книги",href:"/books"},
        {title:"Кабінет",href:"/user"}
    ]
}
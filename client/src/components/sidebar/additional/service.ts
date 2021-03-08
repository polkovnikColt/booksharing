import {LinkInterface} from "../../../types/types";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BookOutlined
} from '@ant-design/icons';

export const getLinks = ():LinkInterface[] =>{
    return [
        {title:"Головна",href:"/",icon:BookOutlined},
        {title:"Книги",href:"/books",icon: MenuUnfoldOutlined},
        {title:"Кабінет",href:"/user",icon: MenuFoldOutlined}
    ];
}
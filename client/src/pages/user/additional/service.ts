import {BookInterface, FormDataInterface, OrderBookInterface} from "../../../types/types";
import {Input} from "antd";
import {loadAllBooks} from "../../../store/user/userActions";

export const formData: FormDataInterface[] = [
    {
        name: 'name',
        label: 'Назва',
        inputComponent: Input
    },
    {
        name: 'author',
        label: 'Автор',
        inputComponent: Input
    },
    {
        name: 'genre',
        label: 'Жанр',
        inputComponent: Input
    },
    {
        name: 'description',
        label: 'Опис',
        inputComponent: Input.TextArea
    },
];

export const userFormData:FormDataInterface[] = [
    {
        name:"name",
        label:"Ім'я",
        inputComponent: Input
    },
]

export const messageFormData:FormDataInterface[] = [{
    name: 'massage',
    label:'',
    inputComponent: Input.TextArea
}]

export const getBooks = (allBooks:BookInterface[], booksToGetIds:number[]) => {
    return booksToGetIds.map(id => allBooks.find(book => book.id === id));
}

export const findBookById = (allBooks: BookInterface[], id:number):string => {
    return allBooks.find(book => book.id === id).name;
}

export const findMyOrders = (orders:OrderBookInterface[], user:number) => {
    return orders.filter(order => order.user[0].id === user);
}

export const findOrdersToMe = (orders:OrderBookInterface[], to:number) => {
    return orders.filter(order => order.to === to);
}
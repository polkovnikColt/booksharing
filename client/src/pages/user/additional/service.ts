import {BookInterface, FormDataInterface} from "../../../types/types";
import {Input} from "antd";

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
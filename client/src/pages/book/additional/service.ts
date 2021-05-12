import {FormDataInterface, UserInterface} from "../../../types/types";
import {Input} from "antd";
import imageCompression from "browser-image-compression";

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

export const messageFormData:FormDataInterface[] = [{
    name: 'massage',
    label:'',
    inputComponent: Input.TextArea
}]

export const getUserByID = (id: number, allUsers: UserInterface[]) => {
    return allUsers.filter((user:UserInterface) => user.id === id)[0];
}

export const rules:string[] = [
    "Червоними маркерами позначені ваші книги",
    "Зірочка - додати в улюблені в особистому кабінеті",
    "Для замовлення необхідно натиснути на обкладинку книги",
]
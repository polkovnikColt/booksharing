import {BookInterface, FormDataInterface} from "../../../types/types";
import {Input} from "antd";

export const messageFormData:FormDataInterface[] = [{
    name: 'massage',
    label:'',
    inputComponent: Input.TextArea
}];

export const findBookById = (allBooks: BookInterface[], id:number):string => {
    return allBooks.find(book => book.id === id).name;
}
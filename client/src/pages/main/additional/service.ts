import {BookInterface, FormDataInterface, UserInterface} from "../../../types/types";
import {Input} from "antd";

export const formData: FormDataInterface[] = [
    {
        label: "Email",
        name: "email",
        inputComponent: Input
    },
    {
        label: "Password",
        name: "password",
        inputComponent: Input.Password
    }
];


export const message: string = "Правила книгообміну: \n\n"
    + "1.Оберіть книгу, що вам сподобалась. \n"
    + "2.Натисніть на обкладинку книги аби запросити її у власника. \n"
    + "3.Очікуйте відповіді. \n"
    + "(Щоб переглянути профіль, натисніть на аватар користувача) \n";

export const getDataFromSearch = (val: string, ...searchData) => {
    const data: string[] = val.split(' ');
    const book = searchData[0]
        .filter(book => book.id === Number.parseInt(data[0])
            && book.name === data[1]);
    if (book.length) {
        return {type: "book", data: book};
    }
    const user = searchData[1]
        .filter(user => user.id === Number.parseInt(data[0])
            && user.name === data[1]);
    if (user.length) {
        return {type: "user", data: user};
    }
    return null;
}
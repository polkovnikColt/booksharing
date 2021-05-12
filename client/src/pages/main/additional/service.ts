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

export const rules: string[] = [
    'Оберіть книгу, що вам сподобалась',
    'Натисніть на обкладинку книги аби запросити її у власника',
    'Запропонуйте книгу на обмін',
    "Чекайте відповіді"

]

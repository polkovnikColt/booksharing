import {FormDataInterface} from "../../../types/types";
import {Input} from "antd";

export const formData: FormDataInterface[] = [
    {
        label: "Ваш email",
        name: "email",
        inputComponent: Input
    },
    {
        label: "Пароль",
        name: "password",
        inputComponent: Input.Password
    }
];
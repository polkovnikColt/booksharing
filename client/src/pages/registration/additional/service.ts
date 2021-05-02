import {FormDataInterface} from "../../../types/types";
import {Input} from "antd";

export const formData:FormDataInterface[] = [
    {
        label:"Email",
        name:"email",
        inputComponent: Input
    },
    {
        label:"Пароль",
        name:"password",
        inputComponent: Input.Password
    },
    {
        label:"Повторіть пароль",
        name:"passwordRepeat",
        inputComponent: Input.Password
    },
    {
        label:"Ім'я користувача",
        name:"name",
        inputComponent: Input
    }
]
import {FormDataInterface, UserInterface} from "../../../types/types";
import {Input} from "antd";

export const formData:FormDataInterface[] = [
    {
        label:"Email",
        name:"email",
        inputComponent: Input
    },
    {
        label:"Password",
        name:"password",
        inputComponent: Input.Password
    }
];

export const mockUsers:UserInterface[] = [
    {
        id:0,
        email:'email',
        password:'password',
        userName:'user',
        photo:"",
        role:'user'
    }
]
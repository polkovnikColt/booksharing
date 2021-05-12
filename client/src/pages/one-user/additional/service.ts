import {FormDataInterface} from "../../../types/types";
import {Input} from "antd";

export const messageFormData:FormDataInterface[] = [{
    name:"message",
    label:"",
    inputComponent:Input.TextArea
}]

export const commentFormData:FormDataInterface[] = [{
    label:"",
    name:"text",
    inputComponent: Input.TextArea
}]
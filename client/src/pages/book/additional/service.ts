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

export const compressImage = async (file:File):Promise<File> => {
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 300,
        useWebWorker: true
    }

    return await imageCompression(file, options);
}

export const getUserByID = (id: number, allUsers: UserInterface[]) => {
    return allUsers.filter((user:UserInterface) => user.id === id)[0];
}
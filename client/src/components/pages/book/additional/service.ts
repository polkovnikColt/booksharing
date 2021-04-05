import {BookInterface, FormDataInterface, UserInterface} from "../../../../types/types";
import {Input} from "antd";

export const mockBooks: BookInterface[] = [
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description: 'description',
        views: 0
    },
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description: 'description',
        views: 0
    },
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description: 'description',
        views: 0
    },
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description: 'description',
        views: 0
    }
]

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

]

export const getUserByID = (id: number, allUsers: UserInterface[]) => {
    return allUsers.find((user) => user.id === id);
}
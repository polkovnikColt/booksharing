import {BookInterface, UserInterface} from "../../../../types/types";

export const mockBooks:BookInterface[] = [
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description:'description',
        views:0
    },
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description:'description',
        views:0
    },
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description:'description',
        views:0
    },
    {
        id: 0,
        user: 0,
        name: 'book',
        author: 'author',
        genre: 'genre',
        description:'description',
        views:0
    }
]

export const getUserByID = (id:number,allUsers:UserInterface[]) => {
    console.log(id,allUsers);
    return allUsers.find((user) => user.id === id);
}
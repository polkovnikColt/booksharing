import {BookInterface, UserInterface} from "../../types/types";

export const LOGIN = "LOGIN";
export const UNLOG = "UNLOG";
export const DELETE_BOOK = "DELETE_BOOK";
export const LOAD_BOOKS = "LOAD_BOOKS";
export const LOAD_ALL_BOOKS = "LOAD_ALL_BOOKS";
export const LOAD_ALL_USERS = "LOAD_ALL_USERS";

export const deleteBook = (id: number) => {
    return {type: DELETE_BOOK, payload: id};
}

export const login = (user: UserInterface) => {
    return {type: LOGIN, payload: user};
}

export const unlog = () => {
    return {type: UNLOG, payload: null};
}

export const loadBooks = () => {
    return {type: LOAD_BOOKS, payload: []};
}

export const loadAllBooks = (books: BookInterface[]) => {
    return {type: LOAD_ALL_BOOKS, payload: books};
}

export const loadAllUsers = (users: UserInterface[]) => {
    return {type: LOAD_ALL_USERS, payload: users};
}
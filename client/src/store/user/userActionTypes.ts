import {
    ADD_BOOK,
    DELETE_BOOK,
    LOAD_ALL_BOOKS,
    LOAD_ALL_USERS,
    LOAD_BOOKS,
    LOGIN,
    ORDER_BOOK,
    UNLOG
} from "./userActions";
import {BookInterface, UserInterface} from "../../types/types";


export type DeleteBookType = {
    type: typeof DELETE_BOOK,
    payload: number
}

export type LoginType = {
    type: typeof LOGIN
    payload: UserInterface
}

export type UnlogType = {
    type: typeof UNLOG
    payload: null
}

export type LoadBooksType = {
    type: typeof LOAD_BOOKS
    payload: BookInterface[]
}

export type LoadAllBooksType = {
    type: typeof LOAD_ALL_BOOKS
    payload: BookInterface[]
}

export type LoadingAllUsersType ={
    type: typeof LOAD_ALL_USERS
    payload: UserInterface[]
}

export type OrderBookType = {
    type: typeof ORDER_BOOK
    payload: number
}

export type AddBookType = {
    type: typeof ADD_BOOK
    payload: BookInterface
}

export type ActionsType = DeleteBookType | LoginType
    | UnlogType | LoadBooksType
    | LoadAllBooksType | LoadingAllUsersType
    | OrderBookType | AddBookType;
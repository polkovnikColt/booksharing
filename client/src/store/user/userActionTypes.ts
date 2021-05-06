import {
    ADD_BOOK,
    DELETE_BOOK, DISORDER_BOOK,
    LOAD_ALL_BOOKS,
    LOAD_ALL_USERS,
    LOAD_BOOKS,
    LOGIN,
    ORDER_BOOK,
    UNLOG, UPDATE_BOOK, UPDATE_USER
} from "./userActions";
import {BookInterface, OrderBookInterface, UserInterface} from "../../types/types";


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
    payload: OrderBookInterface
}

export type AddBookType = {
    type: typeof ADD_BOOK
    payload: BookInterface
}

export type UpdateBook = {
    type: typeof UPDATE_BOOK
    payload: BookInterface
}

export type UpdateUserType = {
    type: typeof UPDATE_USER
    payload: UserInterface
}

export type DisorderBookType = {
    type: typeof DISORDER_BOOK
    payload: OrderBookInterface
}

export type ActionsType = DeleteBookType | LoginType
    | UnlogType | LoadBooksType
    | LoadAllBooksType | LoadingAllUsersType
    | OrderBookType | AddBookType | UpdateBook | UpdateUserType | DisorderBookType;
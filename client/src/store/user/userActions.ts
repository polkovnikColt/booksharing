import {BookInterface, UserInterface} from "../../types/types";
import {Dispatch} from "redux";
import {
    AddBookType,
    DeleteBookType,
    LoadAllBooksType,
    LoadBooksType,
    LoadingAllUsersType,
    LoginType,
    OrderBookType
} from "./userActionTypes";

export const LOGIN = "LOGIN";
export const UNLOG = "UNLOG";
export const DELETE_BOOK = "DELETE_BOOK";
export const LOAD_BOOKS = "LOAD_BOOKS";
export const LOAD_ALL_BOOKS = "LOAD_ALL_BOOKS";
export const LOAD_ALL_USERS = "LOAD_ALL_USERS";
export const ORDER_BOOK = "ORDER_BOOK";
export const ADD_BOOK = "ADD_BOOK";

export const deleteBook = (id: number) => {
    return async (dispatch: Dispatch<DeleteBookType>) => {
        dispatch({
            type: DELETE_BOOK,
            payload: id
        })
    };
}

export const login = (user: UserInterface) => {
    return async (dispatch: Dispatch<LoginType>) => {
        dispatch({
            type: LOGIN,
            payload: user
        })
    }
}

export const unlog = () => {
    return {type: UNLOG, payload: null};
}

export const registration = (user) => {
    return async (dispatch:Dispatch<LoginType>) => {
        dispatch({
            type:LOGIN,
            payload: user
        })
    }
}

export const addBook = (book) => {
    return async (dispatch: Dispatch<AddBookType>) => {
        dispatch({
            type: ADD_BOOK,
            payload: book
        })
    }
}

export const loadBooks = (books: BookInterface[]) => {
    return async (dispatch: Dispatch<LoadBooksType>) => {
        dispatch({
            type: LOAD_BOOKS,
            payload: books
        })
    };
}

export const loadAllBooks = (books: BookInterface[]) => {
    return async (dispatch: Dispatch<LoadAllBooksType>) => {
        dispatch({
            type: LOAD_ALL_BOOKS,
            payload: books
        });
    };
}

export const loadAllUsers = (users: UserInterface[]) => {

    return async (dispatch: Dispatch<LoadingAllUsersType>) => {
        dispatch({
            type: LOAD_ALL_USERS,
            payload: users
        });
    };
}

export const orderBook = (bookId: number) => {
    return async (dispatch: Dispatch<OrderBookType>) => {
        dispatch({
            type: ORDER_BOOK,
            payload: bookId
        });
    };
}
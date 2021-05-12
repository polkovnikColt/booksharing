import {BookInterface, CommentInterface, FavoriteInterface, OrderBookInterface, UserInterface} from "../../types/types";
import {Dispatch} from "redux";
import {
    AddBookType, AddCommentType, AddFavoriteType,
    DeleteBookType, DeleteFavoriteType, DisorderBookType,
    LoadAllBooksType,
    LoadBooksType,
    LoadingAllUsersType, LoadUserCommentsType,
    LoginType,
    OrderBookType, UpdateBook, UpdateUserType
} from "./userActionTypes";
import axios from "../../axios/initAxios";

export const LOGIN = "LOGIN";
export const UNLOG = "UNLOG";
export const DELETE_BOOK = "DELETE_BOOK";
export const LOAD_BOOKS = "LOAD_BOOKS";
export const LOAD_ALL_BOOKS = "LOAD_ALL_BOOKS";
export const LOAD_ALL_USERS = "LOAD_ALL_USERS";
export const ORDER_BOOK = "ORDER_BOOK";
export const DISORDER_BOOK = "DISORDER_BOOK";
export const ADD_BOOK = "ADD_BOOK";
export const UPDATE_BOOK = "UPDATE_BOOK";
export const UPDATE_USER = "UPDATE_USER";
export const LOAD_USER_COMMENTS = "LOAD_USER_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const deleteBook = (book: BookInterface) => {
    return async (dispatch: Dispatch<DeleteBookType>) => {
        try {
            const res = axios.delete(`book/${book.id}`)
            dispatch({
                type: DELETE_BOOK,
                payload: book.id
            });
        } catch (e) {

        }
    };
}

export const login = (user) => {
    return async (dispatch: Dispatch<LoginType>) => {
        try {
            const res = await axios.post('/login', user);
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: LOGIN,
                payload: res.data.user
            })
        } catch (e) {
            alert("No such user found")
        }
    }
}

export const unlog = () => {
    return {type: UNLOG, payload: null};
}

export const registration = (user) => {
    return async (dispatch: Dispatch<LoginType>) => {
        try {
            const res = await axios.post('/login/registration', user);
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: LOGIN,
                payload: res.data.user
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const addBook = (book) => {
    return async (dispatch: Dispatch<AddBookType>) => {
        const user = book.user;
        book.user = book.user[0].id;
        try {
            await axios.post('/book', book);
            book.user = user;
            dispatch({
                type: ADD_BOOK,
                payload: book
            });
        } catch (e) {

        }
    }
}

export const loadBooks = (id: number) => {
    return async (dispatch: Dispatch<LoadBooksType>) => {
        try {
            const res = await axios.get(`/book/${id}`);
            dispatch({
                type: LOAD_BOOKS,
                payload: res.data
            })
        } catch (e) {

        }

    };
}

export const loadAllBooks = () => {
    return async (dispatch: Dispatch<LoadAllBooksType>) => {
        try {
            const res = await axios.get('/book');
            dispatch({
                type: LOAD_ALL_BOOKS,
                payload: res.data
            });
        } catch (e) {

        }
    };
}

export const loadAllUsers = () => {

    return async (dispatch: Dispatch<LoadingAllUsersType>) => {
        try {
            const res = await axios.get('/user');
            dispatch({
                type: LOAD_ALL_USERS,
                payload: res.data
            });
        } catch (e) {

        }
    };
}

export const orderBook = (order: OrderBookInterface) => {
    return async (dispatch: Dispatch<OrderBookType>) => {
        // try {
        //     const resUser = await axios.put(`user/order/${order.userId}`, order);
        //     const resBook = await axios.put(`book/${order.bookId}`,
        //         {isOrdered: true, views: order.views + 1});
        //     dispatch({
        //         type: ORDER_BOOK,
        //         payload: order
        //     });
        // } catch (e) {
        //
        // }
    };
}

export const disorderBook = (order: OrderBookInterface) => {
    return async (dispatch: Dispatch<DisorderBookType>) => {
        // try {
        //     const resUser = await axios.put(`user/disorder/${order.userId}`, order);
        //     const resBook = await axios.put(`book/${order.bookId}`,
        //         {isOrdered: false});
        //     console.log(resUser, resBook);
        //     dispatch({
        //         type: DISORDER_BOOK,
        //         payload: order
        //     })
        // } catch (e) {
        //
        // }
    }
}

export const updateBook = (book: BookInterface) => {
    return async (dispatch: Dispatch<UpdateBook>) => {
        const res = await axios.put(`/book/${book.id}`, book);
        try {
            dispatch({
                type: UPDATE_BOOK,
                payload: book
            })
        } catch (e) {

        }
    }
}

export const updateUser = (user: UserInterface) => {
    return async (dispatch: Dispatch<UpdateUserType>) => {
        try {
            const res = axios.put(`user/${user.id}`, user);
            dispatch({
                type: UPDATE_USER,
                payload: user
            })
        } catch (e) {

        }
    }
}

export const loadUserComments = (id: number) => {
    return async (dispatch: Dispatch<LoadUserCommentsType>) => {
        try {
            const res = await axios.get(`comment/${id}`);
            console.log(res)
            dispatch({
                type: LOAD_USER_COMMENTS,
                payload: res.data
            })
        } catch (e) {

        }
    }
}

export const addComment = (comment: CommentInterface) => {
    return async (dispatch: Dispatch<AddCommentType>) => {
        const user = comment.user;
        comment.user = comment.user[0].id;
        try {
            const res = await axios.post('/comment', comment);
            comment.user = user;
            dispatch({
                type: ADD_COMMENT,
                payload: comment
            })
        } catch (e) {

        }
    }
}

export const addToFavorite = (favorite: FavoriteInterface) => {
    return async (dispatch: Dispatch<AddFavoriteType>) => {
        try {
            const res = await axios.put('user/favorite/add', favorite);
            dispatch({
                type: ADD_FAVORITE,
                payload: favorite
            });
        } catch (e) {

        }
    }
}

export const deleteFromFavorite = (favorite: FavoriteInterface) => {
    return async (dispatch: Dispatch<DeleteFavoriteType>) => {
        try {
            const res = await axios.put('user/favorite/delete', favorite);
            dispatch({
                type: DELETE_FAVORITE,
                payload: favorite
            })
        } catch (e) {

        }
    }
}
import {
    ADD_BOOK, ADD_COMMENT, ADD_FAVORITE, ADD_TO_PREFERENCE, APPROVE_ORDER,
    DELETE_BOOK, DELETE_COMMENT, DELETE_FAVORITE, DELETE_USER, DISORDER_BOOK,
    LOAD_ALL_BOOKS, LOAD_ALL_ORDERS,
    LOAD_ALL_USERS,
    LOAD_BOOKS, LOAD_PREFERENCE, LOAD_USER_COMMENTS,
    LOGIN,
    ORDER_BOOK,
    UNLOG, UPDATE_BOOK, UPDATE_USER, UPDATE_USER_TO_ADMIN
} from "./userActions";
import {
    BookInterface,
    CommentInterface,
    FavoriteInterface,
    OrderBookInterface, PreferenceInputInterface,
    PreferenceInterface,
    UserInterface
} from "../../types/types";


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

export type LoadingAllUsersType = {
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

export type LoadUserCommentsType = {
    type: typeof LOAD_USER_COMMENTS
    payload: CommentInterface[]
}

export type AddCommentType = {
    type: typeof ADD_COMMENT
    payload: CommentInterface
}

export type AddFavoriteType = {
    type: typeof ADD_FAVORITE,
    payload: FavoriteInterface
}

export type DeleteFavoriteType = {
    type: typeof DELETE_FAVORITE,
    payload: FavoriteInterface
}

export type LoadAllOrdersType = {
    type: typeof LOAD_ALL_ORDERS,
    payload: OrderBookInterface[]
}

export type ApproveOrderType = {
    type: typeof APPROVE_ORDER,
    payload: OrderBookInterface
}

export type AddToPreferenceType = {
    type: typeof ADD_TO_PREFERENCE,
    payload: PreferenceInputInterface
}

export type LoadPreferenceType = {
    type: typeof LOAD_PREFERENCE,
    payload: PreferenceInterface
}

export type DeleteUserType = {
    type: typeof DELETE_USER,
    payload: number
}

export type UpdateUserToAdminType = {
    type: typeof UPDATE_USER_TO_ADMIN,
    payload: number
}

export type DeleteCommentType = {
    type: typeof DELETE_COMMENT,
    payload: number
}

export type ActionsType = DeleteBookType | LoginType
    | UnlogType | LoadBooksType
    | LoadAllBooksType | LoadingAllUsersType
    | OrderBookType | AddBookType | UpdateBook
    | UpdateUserType | DisorderBookType | LoadUserCommentsType
    | AddCommentType | AddFavoriteType | DeleteFavoriteType
    | LoadAllOrdersType | ApproveOrderType | AddToPreferenceType
    | LoadPreferenceType | UpdateUserToAdminType | DeleteCommentType
    | DeleteUserType;